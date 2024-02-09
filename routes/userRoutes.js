const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Car = require('../models/car');

// Get all users
router.get('/', (req, res) => {
  res.json(User.getAllUsers());
});

// Get a specific user by ID
router.get('/:id', (req, res) => {
  const user = User.getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Add a new user
router.post('/', (req, res) => {
  const { name, email } = req.body; 
  const newUser = new User(name, email); 
  User.addUser(newUser);
  res.status(201).json(newUser);
});

// Update a user by ID
router.put('/:id', (req, res) => {
  const { name, email } = req.body; 
  const updatedUser = User.updateUser(req.params.id, name, email); 
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
  const deletedUser = User.deleteUser(req.params.id);
  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Add a car to a user by ID
router.post('/:userId/cars', (req, res) => {
  const { brand, model } = req.body;
  const user = User.getUserById(req.params.userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const newCar = new Car(brand, model);
  user.addCar(newCar);
  res.status(201).json(newCar);
});

module.exports = router;
