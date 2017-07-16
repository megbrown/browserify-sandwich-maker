var SandwichMaker = (function(maker) {

	let breadPrices = {
  	wheat: 1.00,
    white: 0.90,
    sourdough: 1.10,
    wrap: 1.00
  }

  maker.addBread = function(selectedTopping) {
		  	if (selectedTopping === "Wheat") {
		  		selectedPrice = breadPrices.wheat;
		  	} else if (selectedTopping === "White") {
		  		selectedPrice = breadPrices.white;
		  	} else if (selectedTopping === "Sourdough") {
		  		selectedPrice = breadPrices.sourdough;
		  	} else if (selectedTopping === "Wrap"){
		  		selectedPrice = breadPrices.wrap;
		  	} else {
		  		selectedPrice = 0;
		  	}
		  	return selectedPrice;
  		};

 	return maker;

}(SandwichMaker || {}));