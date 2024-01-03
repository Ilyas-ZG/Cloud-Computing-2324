const { v4: uuidv4 } = require('uuid');

class User {
  constructor(name, email) {
    this.id = generateUniqueId();
    this.name = name;
    this.email = email;
  }
}

// Simulating a database by storing users in a variable
let users = [];

// Method to get all users
User.getAllUsers = () => {
  return users;
};

// Method to add a new user
User.addUser = (newUser) => {
  users.push(newUser);
};

// Method to get a user by ID
User.getUserById = (id) => {
  return users.find((user) => user.id === id);
};

// Method to update a user by ID
User.updateUser = (id, name, email) => {
  const userToUpdate = users.find((user) => user.id === id);
  if (userToUpdate) {
    userToUpdate.name = name;
    userToUpdate.email = email;
    return userToUpdate;
  }
  return null;
};

// Method to delete a user by ID
User.deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  return null;
};

// Utility function to generate a unique ID (example)
function generateUniqueId() {
  return uuidv4();
}

module.exports = User;
