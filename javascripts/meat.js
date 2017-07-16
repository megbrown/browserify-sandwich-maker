var SandwichMaker = (function(maker) {

	let meatPrices = {
  	turkey: 1.00,
    bacon: 0.50,
    roastbeef: 1.10,
    ham: 1.00
  }

  maker.addMeat = function(selectedTopping) {
		  	if (selectedTopping === "Turkey") {
		  		selectedPrice = meatPrices.turkey;
		  	} else if (selectedTopping === "Bacon") {
		  		selectedPrice = meatPrices.bacon;
		  	} else if (selectedTopping === "Roastbeef") {
		  		selectedPrice = meatPrices.roastbeef;
		  	} else if (selectedTopping === "Ham"){
		  		selectedPrice = meatPrices.ham;
		  	} else {
		  		selectedPrice = 0;
		  	}
		  	console.log("selected price", selectedPrice);
		  	return selectedPrice;
  		};

 	return maker;

}(SandwichMaker || {}));