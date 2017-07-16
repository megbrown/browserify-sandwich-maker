var SandwichMaker = (function(maker) {

	let veggiesPrices = {
  	lettuce: 1.00,
    tomato: 0.90,
    pickle: 1.10,
    onion: 1.00
  }

  maker.addVeggies = function(selectedTopping) {
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
		  	console.log("selected price", selectedPrice);
		  	return selectedPrice;
  		};

 	return maker;

}(SandwichMaker || {}));