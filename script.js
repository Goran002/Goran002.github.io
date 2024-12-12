const button = document.getElementById('button_1');
const header = document.getElementById('h1');
const input = document.getElementById('input');
let sum = 0 ;
function clickChangeBg() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.body.style.backgroundColor = rgbValue;
}


button.onclick = function (){ 
    clickChangeBg(header)
    console.log(typeof input)
}






