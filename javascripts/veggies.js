"use strict";

let $ = require("jquery");

let selectedTopping;
let selectedPrice;

let veggiesPrices = {
	lettuce: 1.00,
  tomato: 0.90,
  pickle: 1.10,
  onion: 1.00
};

function addVeggies(selectedTopping) {
	if (selectedTopping === "Lettuce") {
		selectedPrice = veggiesPrices.lettuce;
	} else if (selectedTopping === "Tomato") {
		selectedPrice = veggiesPrices.tomato;
	} else if (selectedTopping === "Pickle") {
		selectedPrice = veggiesPrices.pickle;
	} else if (selectedTopping === "Onion"){
		selectedPrice = veggiesPrices.onion;
	} else {
		selectedPrice = 0;
	}
	return selectedPrice;
}

module.exports = {addVeggies};