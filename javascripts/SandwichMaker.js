var SandwichMaker = (function(maker) {

 let totalPrice = 0;

 	maker.addTopping = function(toppingPrice) {
 			totalPrice = 0;
      totalPrice += toppingPrice;
      return totalPrice;
  };

  return maker;

}(SandwichMaker || {}));