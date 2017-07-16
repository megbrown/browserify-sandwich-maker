
let finalSandwichPrice = 0;

let selectedTopping;
let toppingPrice;

let breadChooser = document.getElementById("bread-chooser");
let meatChooser = document.getElementById("meat-chooser");
let cheeseChooser = document.getElementById("cheese-chooser");
let condimentsChooser = document.getElementById("condiments-chooser");
let veggiesChooser = document.getElementById("veggies-chooser");
let getPriceButton = document.getElementById("get-price");

function getFinalPrice(addIngredient){
	toppingPrice = addIngredient;
  finalSandwichPrice += SandwichMaker.addTopping(toppingPrice);
}

function printToDom(selectedTopping) {
	document.getElementById("sandwich-output").innerHTML += `<h4>Item: ${selectedTopping}</h4>`;
}

breadChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.addBread(selectedTopping));
});

meatChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.addMeat(selectedTopping));
});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.addCheese(selectedTopping));
});

condimentsChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.addCondiments(selectedTopping));
});

veggiesChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  printToDom(selectedTopping);
  getFinalPrice(SandwichMaker.addVeggies(selectedTopping));
});

getPriceButton.addEventListener("click", function(event) {
	document.getElementById("price-output").innerHTML = `<h2>Amount Due: $${finalSandwichPrice.toFixed(2)}</h2>`;
})