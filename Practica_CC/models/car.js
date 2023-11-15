const { v4: uuidv4 } = require('uuid');

class Car {
  constructor(brand, model) {
    this.id = generateUniqueId(); // Make sure to have a function that generates a unique ID
    this.brand = brand;
    this.model = model;
  }
}

// Simulating a database by storing cars in a variable
let cars = [];

// Method to get all cars
Car.getAllCars = () => {
  return cars;
};

// Method to add a new car
Car.addCar = (newCar) => {
  cars.push(newCar);
};

// Method to get a car by ID
Car.getCarById = (id) => {
  return cars.find((car) => car.id === id);
};

// Method to update a car by ID
Car.updateCar = (id, brand, model) => {
  const carToUpdate = cars.find((car) => car.id === id);
  if (carToUpdate) {
    carToUpdate.brand = brand;
    carToUpdate.model = model;
    return carToUpdate;
  }
  return null;
};

// Method to delete a car by ID
Car.deleteCar = (id) => {
  const index = cars.findIndex((car) => car.id === id);
  if (index !== -1) {
    const deletedCar = cars.splice(index, 1);
    return deletedCar[0];
  }
  return null;
};

// Utility function to generate a unique ID (example)
function generateUniqueId() {
  return uuidv4();
}

module.exports = Car;
