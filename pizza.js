window.onload = pageLoad;

var pizzaCount = 0;

function pageLoad(){
	var piz = document.getElementById("pizza");
	//pizCount.innerHTML = "abba";
	piz.onclick = pizClick;
	hands();
}

function pizClick(){
	pizzaCount++;
	document.getElementById("pizzaCount").innerHTML = pizzaCount;
}

function hands(){
	setTimeout(hands, 1000);
	pizzaCount++;
	document.getElementById("pizzaCount").innerHTML = pizzaCount;
}
