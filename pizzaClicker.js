var i = 1;

var interval = setInterval( increment, 1000);

function increment(){
    i = i % 360 + 1;
}