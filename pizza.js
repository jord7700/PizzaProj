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

function hands(){
	autoClicker(hands ,1);
	incCost(cost);
}

function autoClicker(func, val){
	setTimeout(func, 1000);
	pizzaCount+= val;
	updatePizza();
}

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
