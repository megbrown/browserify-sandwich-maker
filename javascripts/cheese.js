var SandwichMaker = (function(maker) {

	let cheesePrices = {
  	American: 0.80,
    cheddar: 0.90,
    swiss: 1.00,
    provolone: 1.00
  }

  maker.addCheese = function(selectedTopping) {
		  	if (selectedTopping === "American") {
		  		selectedPrice = cheesePrices.American;
		  	} else if (selectedTopping === "Cheddar") {
		  		selectedPrice = cheesePrices.cheddar;
		  	} else if (selectedTopping === "Swiss") {
		  		selectedPrice = cheesePrices.swiss;
		  	} else if (selectedTopping === "Provolone"){
		  		selectedPrice = cheesePrices.provolone;
		  	} else {
		  		selectedPrice = 0;
		  	}
		  	console.log("selected price", selectedPrice);
		  	return selectedPrice;
  		};

 	return maker;

}(SandwichMaker || {}));