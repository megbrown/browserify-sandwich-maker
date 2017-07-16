"use strict";

let $ = require("jquery");

let selectedTopping;
let selectedPrice;

let condimentsPrices = {
	mustard: 0.20,
	mayo: 0.20,
	honeyMustard: 0.30,
	oilAndVinegar: 0.40
};

function addCondiments(selectedTopping) {
	if (selectedTopping === "Mustard") {
		selectedPrice = condimentsPrices.mustard;
	} else if (selectedTopping === "Mayo") {
		selectedPrice = condimentsPrices.mayo;
	} else if (selectedTopping === "Honey Mustard") {
		selectedPrice = condimentsPrices.honeyMustard;
	} else if (selectedTopping === "Oil & Vinegar"){
		selectedPrice = condimentsPrices.oilAndVinegar;
	} else {
		selectedPrice = 0;
	}
	return selectedPrice;
}

module.exports = {addCondiments};