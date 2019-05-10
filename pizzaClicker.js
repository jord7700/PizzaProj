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
        document.getElementById("uCost-chefHand").innerHTML = "BOUGHT!";
    }
}

function upgradeItalian () {
    var cost = document.getElementById("uCost-italian").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-italian").innerHTML = "BOUGHT!";
    }
}
function upgradeShop () {
    var cost = document.getElementById("uCost-pizzaShop").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-pizzaShop").innerHTML = "BOUGHT!";
    }
}
function upgradeCellar () {
    var cost = document.getElementById("uCost-pizzaCellar").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-pizzaCellar").innerHTML = "BOUGHT!";
    }
}
function upgradeCity () {
    var cost = document.getElementById("uCost-pizzaCity").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-pizzaCity").innerHTML = "BOUGHT!";
    }
}
function upgradeCountry () {
    var cost = document.getElementById("uCost-pizzaCountry").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-pizzaCountry").innerHTML = "BOUGHT!";
    }
}
function upgradeContinent () {
    var cost = document.getElementById("uCost-pizzaContinent").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-pizzaContinent").innerHTML = "BOUGHT!";
    }
}
function upgradeSpace () {
    var cost = document.getElementById("uCost-spacePizza").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-spacePizza").innerHTML = "BOUGHT!";
    }
}
function upgradeNuclear () {
    var cost = document.getElementById("uCost-nuclearPizza").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-nuclearPizza").innerHTML = "BOUGHT!";
    }
}
function upgradeMoap () {
    var cost = document.getElementById("uCost-moap").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-moap").innerHTML = "BOUGHT!";
    }
}
function upgradeEntropy () {
    var cost = document.getElementById("uCost-pizzaEntropy").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("uCost-pizzaEntropy").innerHTML = "BOUGHT!";
    }
}

//  Power-up Functions
function hands(){
    autoClicker(hands ,1);
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
    document.getElementById("player_score").innerHTML = pizzaCount;
}

function farmHands(){
    var cost = document.getElementById("fCost-chefHand").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
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
        document.getElementById("fCost-pizzaCellar").innerHTML = cost * 2;
        pizzaCellar();
    }
}
function farmCity () {
    var cost = document.getElementById("fCost-pizzaCity").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("fCost-pizzaCity").innerHTML = cost * 2;
        pizzaCity();
    }
}
function farmCountry () {
    var cost = document.getElementById("fCost-pizzaCountry").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("fCost-pizzaCountry").innerHTML = cost * 2;
        pizzaCountry();
    }
}
function farmContinent () {
    var cost = document.getElementById("fCost-pizzaContinent").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("fCost-pizzaContinent").innerHTML = cost * 2;
        pizzaContinent();
    }
}
function farmSpace () {
    var cost = document.getElementById("fCost-spacePizza").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("fCost-spacePizza").innerHTML = cost * 2;
        spacePizza();
    }
}
function farmNuclear () {
    var cost = document.getElementById("fCost-nuclearPizza").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("fCost-nuclearPizza").innerHTML = cost * 2;
        nuclearPizza();
    }
}
function farmMoap () {
    var cost = document.getElementById("fCost-moap").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("fCost-moap").innerHTML = cost * 2;
        moap();
    }
}
function farmEntropy () {
    var cost = document.getElementById("fCost-pizzaEntropy").innerHTML;
    if(pizzaCount >= cost){
        pizzaCount = pizzaCount - cost;
        updatePizza();
        pizzaClick = pizzaClick * 2;
        document.getElementById("fCost-pizzaEntropy").innerHTML = cost * 2;
        pizzaEntropy();
    }
}