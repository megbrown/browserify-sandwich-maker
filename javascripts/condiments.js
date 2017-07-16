var SandwichMaker = (function(maker) {

	let condimentsPrices = {
  	mustard: 0.20,
    mayo: 0.20,
    honeyMustard: 0.30,
    oilAndVinegar: 0.40
  }

  maker.addCondiments = function(selectedTopping) {
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
		  	console.log("selected price", selectedPrice);
		  	return selectedPrice;
  		};

 	return maker;

}(SandwichMaker || {}));