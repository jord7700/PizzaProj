window.onload = pageLoad;

var pizzaCount = 0;

function pageLoad(){
	var piz = document.getElementById("pizza");
	var upHands = document.getElementById("hands");
	//pizCount.innerHTML = "abba";
	piz.onclick = pizClick;
	upHands.onclick = upgradeHands;
}

function pizClick(){
	pizzaCount++;
	updatePizza();
}

//  Power-up Functions
function hands(){
	autoClicker(hands ,1);
	incCost(cost);
}
function italians() {
    autoClicker(italians, 5);
}
function pizzaShop() {
    autoClicker(pizzaShop, 20);
}
function pizzaCellar() {
    autoClicker(pizzaCellar, 50);
}
function pizzaCity() {
    autoClicker(pizzaCity, 200);
}
function pizzaCountry() {
    autoClicker(pizzaCountry, 650);
}
function pizzaContinent() {
    autoClicker(pizzaContinent, 2250);
}
function spacePizza() {
    autoClicker(spacePizza, 5500);
}
function nuclearPizza() {
    autoClicker(nuclearPizza, 12000);
}
function moap() {
    autoClicker(moap, 25000);
}
function pizzaEntropy() {
    alert("All atoms in the universe, now belong to pizza.");
}

//  Auto-pizza-incrementation function
function autoClicker(func, val){
	setTimeout(func, 1000);
	pizzaCount+= val;
	updatePizza();
}
//  Update the pizza count, after all is said and done
function updatePizza(){
	document.getElementById("pizzaCount").innerHTML = pizzaCount;
}

function upgradeHands(){
	var cost = document.getElementById("costHands").innerHTML;
	if(pizzaCount >= cost){
		pizzaCount = pizzaCount - cost;
		updatePizza();
		document.getElementById("costHands").innerHTML = cost * 2;
		hands();
	}
}
