const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// Get all cars
router.get('/', (req, res) => {
  res.json(Car.getAllCars());
});

// Get a specific car by ID
router.get('/:id', (req, res) => {
  const car = Car.getCarById(req.params.id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

// Add a new car
router.post('/', (req, res) => {
  const { brand, model } = req.body;
  const newCar = new Car(brand, model);
  Car.addCar(newCar);
  res.status(201).json(newCar);
});

// Update a car by ID
router.put('/:id', (req, res) => {
  const { brand, model } = req.body;
  const updatedCar = Car.updateCar(req.params.id, brand, model);
  if (updatedCar) {
    res.json(updatedCar);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

// Delete a car by ID
router.delete('/:id', (req, res) => {
  const deletedCar = Car.deleteCar(req.params.id);
  if (deletedCar) {
    res.json(deletedCar);
  } else {
    res.status(404).json({ message: 'Car not found' });
  }
});

module.exports = router;
