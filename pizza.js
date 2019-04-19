window.onload = pageLoad;

var pizzaCount = 0;

function pageLoad(){
	var piz = document.getElementById("pizza");
	var upHands = document.getElementById("hands");
	//pizCount.innerHTML = "abba";
	piz.onclick = pizClick;
	upHands.onclick = hands;
}

function pizClick(){
	pizzaCount++;
	updatePizza();
}

function hands(){
	autoClicker(hands ,1000);
}

function autoClicker(func, interval){
	setTimeout(func, interval);
	pizzaCount++;
	updatePizza();
}

function updatePizza(){
	document.getElementById("pizzaCount").innerHTML = pizzaCount;
}
