window.onload = pageLoad;

var pizzaCount = 0;
var pizzaClick = 1;

function pageLoad(){
    var piz = document.getElementById("clicker-pizza");
    var fHands = document.getElementById("chefHand");
    var upHands = document.getElementById("upgrade_chefHand");

    var fItalian = document.getElementById("italian");
    var upItalian = document.getElementById("upgrade_italian");

    var fShop = document.getElementById("pizzaShop");
    var upShop = document.getElementById("upgrade_pizzaShop");

    var fCellar = document.getElementById("pizzaCellar");
    var upCellar = document.getElementById("upgrade_pizzaCellar");

    var fCity = document.getElementById("pizzaCity");
    var upCity = document.getElementById("upgrade_pizzaCity");

    var fCountry = document.getElementById("pizzaCountry");
    var upCountry = document.getElementById("upgrade_pizzaCountry");

    var fContinent = document.getElementById("pizzaContinent");
    var upContinent = document.getElementById("upgrade_pizzaContinent");

    var fSpace = document.getElementById("spacePizza");
    var upSpace = document.getElementById("upgrade_spacePizza");

    var fNuclear = document.getElementById("nuclearPizza");
    var upNuclear = document.getElementById("upgrade_nuclearPizza");

    var fMoap = document.getElementById("moap");
    var upMoap = document.getElementById("upgrade_moap");

    var fEntropy = document.getElementById("pizza_entropy");
    var upEntropy = document.getElementById("upgrade_pizzaEntropy");

    piz.onclick = pizClick;

    upHands.onclick = upgradeHands;
    upItalian.onclick = upgradeItalian;
    upShop.onclick = upgradeShop;
    upCellar.onclick = upgradeCellar;
    upCity.onclick = upgradeCity;
    upCountry.onclick = upgradeCountry;
    upContinent.onclick = upgradeContinent;
    upSpace.onclick = upgradeSpace;
    upNuclear.onclick = upgradeNuclear;
    upMoap.onclick = upgradeMoap;
    upEntropy.onclick = upgradeEntropy;

    fHands.onclick = farmHands;
    fItalian.onclick = farmItalian;
    fShop.onclick = farmShop;
    fCellar.onclick = farmCellar;
    fCity.onclick = farmCity;
    fCountry.onclick = farmCountry;
    fContinent.onclick = farmContinent;
    fSpace.onclick = farmSpace;
    fNuclear.onclick = farmNuclear;
    fMoap.onclick = farmMoap;
    fEntropy.onclick = farmEntropy;
}

function pizClick(){
    pizzaCount = pizzaCount + pizzaClick;
    updatePizza();
}

function upgradeHands () {
    var cost = document.getElementById("uCost-chefHand").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_hands").innerHTML = " Owned";
        document.getElementById("uCost-chefHand").innerHTML = "BOUGHT!";
    }
}

function upgradeItalian () {
    var cost = document.getElementById("uCost-italian").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_italian").innerHTML = " Owned";
        document.getElementById("uCost-italian").innerHTML = "BOUGHT!";
    }
}
function upgradeShop () {
    var cost = document.getElementById("uCost-pizzaShop").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_shop").innerHTML = " Owned";
        document.getElementById("uCost-pizzaShop").innerHTML = "BOUGHT!";
    }
}
function upgradeCellar () {
    var cost = document.getElementById("uCost-pizzaCellar").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_cellar").innerHTML = " Owned";
        document.getElementById("uCost-pizzaCellar").innerHTML = "BOUGHT!";
    }
}
function upgradeCity () {
    var cost = document.getElementById("uCost-pizzaCity").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_city").innerHTML = " Owned";
        document.getElementById("uCost-pizzaCity").innerHTML = "BOUGHT!";
    }
}
function upgradeCountry () {
    var cost = document.getElementById("uCost-pizzaCountry").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_country").innerHTML = " Owned";
        document.getElementById("uCost-pizzaCountry").innerHTML = "BOUGHT!";
    }
}
function upgradeContinent () {
    var cost = document.getElementById("uCost-pizzaContinent").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_continent").innerHTML = " Owned";
        document.getElementById("uCost-pizzaContinent").innerHTML = "BOUGHT!";
    }
}
function upgradeSpace () {
    var cost = document.getElementById("uCost-spacePizza").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_space").innerHTML = " Owned";
        document.getElementById("uCost-spacePizza").innerHTML = "BOUGHT!";
    }
}
function upgradeNuclear () {
    var cost = document.getElementById("uCost-nuclearPizza").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_reactor").innerHTML = " Owned";
        document.getElementById("uCost-nuclearPizza").innerHTML = "BOUGHT!";
    }
}
function upgradeMoap () {
    var cost = document.getElementById("uCost-moap").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_moap").innerHTML = " Owned";
        document.getElementById("uCost-moap").innerHTML = "BOUGHT!";
    }
}
function upgradeEntropy () {
    var cost = document.getElementById("uCost-pizzaEntropy").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("count_u_italian").innerHTML = " Owned";
        document.getElementById("uCost-pizzaEntropy").innerHTML = "BOUGHT!";
    }
}

//  Power-up Functions
function hands(){
    autoClicker(hands ,1);
}
function italians() {
    autoClicker(italians, 2);
}
function pizzaShop() {
    autoClicker(pizzaShop, 5);
}
function pizzaCellar() {
    autoClicker(pizzaCellar, 10);
}
function pizzaCity() {
    autoClicker(pizzaCity, 500);
}
function pizzaCountry() {
    autoClicker(pizzaCountry, 100);
}
function pizzaContinent() {
    autoClicker(pizzaContinent, 4250);
}
function spacePizza() {
    autoClicker(spacePizza, 92000);
}
function nuclearPizza() {
    autoClicker(nuclearPizza, 120000);
}
function moap() {
    autoClicker(moap, 250000);
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
    document.getElementById("player_score").innerHTML = pizzaCount;
}

function farmHands(){
    var cost = document.getElementById("fCost-chefHand").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        var count = document.getElementById("count_f_hands").innerText;
        count++;
        document.getElementById("count_f_hands").innerText = " " + count;
        document.getElementById("fCost-chefHand").innerHTML = cost * 2;
        hands();
    }
}

function farmItalian () {
    var cost = document.getElementById("fCost-italian").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_italian").innerText;
        count++;
        document.getElementById("count_f_italian").innerText = " " + count;
        document.getElementById("fCost-italian").innerHTML = cost * 2;
        italians();
    }
}
function farmShop () {
    var cost = document.getElementById("fCost-pizzaShop").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_shop").innerText;
        count++;
        document.getElementById("count_f_shop").innerText = " " + count;
        document.getElementById("fCost-pizzaShop").innerHTML = cost * 2;
        pizzaShop();
    }
}
function farmCellar () {
    var cost = document.getElementById("fCost-pizzaCellar").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_cellar").innerText;
        count++;
        document.getElementById("count_f_cellar").innerText = " " + count;
        document.getElementById("fCost-pizzaCellar").innerHTML = cost * 2;
        pizzaCellar();
    }
}
function farmCity () {
    var cost = document.getElementById("fCost-pizzaCity").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_city").innerText;
        count++;
        document.getElementById("count_f_city").innerText = " " + count;
        cost = (cost / 1000) *2;
        cost = cost.toString();
        cost = cost.concat('k');
        document.getElementById("fCost-pizzaCity").innerHTML = cost;
        pizzaCity();
    }
}
function farmCountry () {
    var cost = document.getElementById("fCost-pizzaCountry").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_country").innerText;
        count++;
        document.getElementById("count_f_country").innerText = " " + count;
        cost = (cost / 1000000) *2;
        cost = cost.toString();
        cost = cost.concat('m');
        document.getElementById("fCost-pizzaCountry").innerHTML = cost;
        pizzaCountry();
    }
}
function farmContinent () {
    var cost = document.getElementById("fCost-pizzaContinent").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_continent").innerText;
        count++;
        document.getElementById("count_f_continent").innerText = " " + count;
        cost = (cost / 1000000) *2;
        cost = cost.toString();
        cost = cost.concat('m');
        document.getElementById("fCost-pizzaContinent").innerHTML = cost;
        pizzaContinent();
    }
}
function farmSpace () {
    var cost = document.getElementById("fCost-spacePizza").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_space").innerText;
        count++;
        document.getElementById("count_f_space").innerText = " " + count;
        cost = (cost / 1000000) *2;
        cost = cost.toString();
        cost = cost.concat('m');
        document.getElementById("fCost-spacePizza").innerHTML = cost;
        spacePizza();
    }
}
function farmNuclear () {
    var cost = document.getElementById("fCost-nuclearPizza").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_reactor").innerText;
        count++;
        document.getElementById("count_f_reactor").innerText = " " + count;
        cost = (cost / 1000000) *2;
        cost = cost.toString();
        cost = cost.concat('m');
        document.getElementById("fCost-nuclearPizza").innerHTML = cost;
        nuclearPizza();
    }
}
function farmMoap () {
    var cost = document.getElementById("fCost-moap").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        var count = document.getElementById("count_f_entropy").innerText;
        count++;
        document.getElementById("count_f_entropy").innerText = " " + count;
        cost = (cost / 1000000) *2;
        cost = cost.toString();
        cost = cost.concat('m');
        document.getElementById("fCost-moap").innerHTML = cost;
        moap();
    }
}
function farmEntropy () {
    var cost = document.getElementById("fCost-pizzaEntropy").innerHTML;
    cost = cost.substr(0, cost.length-1);
    cost = parseInt(cost);
    cost = cost * 1000000;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        cost = (cost / 1000000) *2;
        cost = cost.toString();
        cost = cost.concat('m');
        document.getElementById("fCost-pizzaEntropy").innerHTML = cost;
        pizzaEntropy();
    }
}