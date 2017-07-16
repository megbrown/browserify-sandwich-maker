"use strict";

let $ = require("jquery");

let totalPrice = 0;

function addTopping(toppingPrice) {
	totalPrice = 0;
	totalPrice += toppingPrice;
	return totalPrice;
}

module.exports = {addTopping};