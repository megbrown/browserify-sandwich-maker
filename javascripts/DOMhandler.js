"use strict";

let $ = require("jquery");

let SandwichMaker = {
  bread: require("./bread"),
  meat: require("./meat"),
  cheese: require("./cheese"),
  condiments: require("./condiments"),
  veggies: require("./veggies"),
  sandwich: require("./SandwichMaker")
};

let finalSandwichPrice = 0;

let selectedTopping;
let toppingPrice;

let breadChooser = $("#bread-chooser");
let meatChooser = $("#meat-chooser");
let cheeseChooser = $("#cheese-chooser");
let condimentsChooser = $("#condiments-chooser");
let veggiesChooser = $("#veggies-chooser");
let getPriceButton = $("#get-price");

function getFinalPrice(addIngredient){
	toppingPrice = addIngredient;
  finalSandwichPrice += SandwichMaker.sandwich.addTopping(toppingPrice);
}

function printToDom(selectedTopping) {
	$("#sandwich-output").append(`<h4>Item: ${selectedTopping}</h4>`);
}

breadChooser.on("change", function(event) {
	selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.bread.addBread(selectedTopping));
});

meatChooser.on("change", function(event) {
	selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.meat.addMeat(selectedTopping));
});

cheeseChooser.on("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.cheese.addCheese(selectedTopping));
});

condimentsChooser.on("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.condiments.addCondiments(selectedTopping));
});

veggiesChooser.on("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.veggies.addVeggies(selectedTopping));
});

getPriceButton.on("click", function(event) {
	$("#price-output").html(`<h2>Amount Due: $${finalSandwichPrice.toFixed(2)}</h2>`);
});