'use strict';

function Food(id, name, type, price) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.price = price;
}

Food.prototype.generateId = function () {
  let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return randomNumber;
};

// Method to render food in table
Food.prototype.render = function () {
  let table = document.getElementById('foodTable');

  // Create row
  let row = document.createElement('tr');

  // Create cells in table and append to row
  // Food ID
  let idCell = document.createElement('td');
  idCell.textContent = this.id;
  row.appendChild(idCell);

  // Food Name
  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  row.appendChild(nameCell);

  // Food Type
  let typeCell = document.createElement('td');
  typeCell.textContent = this.type;
  row.appendChild(typeCell);

  // Food Price
  let priceCell = document.createElement('td');
  priceCell.textContent = this.price;
  row.appendChild(priceCell);

  // Append row to table
  table.appendChild(row);
};

// Event listener
document.getElementById('foodForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get values from form
  let foodName = document.getElementById('foodName').value;
  let foodType = document.getElementById('foodType').value;
  let foodPrice = document.getElementById('price').value;

  // Generate a new ID
  let foodId = new Food().generateId();

  // Create a new food object
  let food = new Food(foodId, foodName, foodType, foodPrice);

  // Render results in the webpage table
  food.render();

  // Reset the form
  document.getElementById('foodForm').reset();
});

// Render the initial data
let foodData = [
  { id: 1, name: 'pizza', type: 'fat', price: 8.35 },
  { id: 2, name: 'burger', type: 'fat', price: 4.25 },
  { id: 3, name: 'apple', type: 'fruit', price: 0.65 },
];

foodData.forEach(function (data) {
  let food = new Food(data.id, data.name, data.type, data.price);
  food.render();
});
