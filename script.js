setInterval(changeColor, 1000);
function  changeColor() {
    var x =document.querySelector('strong');
    if (x.style.color=="black")
         x.style.color="red";

    else if (x.style.color=="red")
        x.style.color="blue";
    else if (x.style.color="blue")
        x.style.color="black";
    else if (x.style.color=="black")
        x.style.color="green";
    else if (x.style.color=="purple")
        x.style.color="pink";
    else x.style.color="black";
}

let icon = document.getElementById('icon')
let cons = document.getElementsByClassName('close')

function run (){
    icon.style.color = 'black';
}

function reTurn(){
    cons.style.color = 'white';

}
icon.onclick = run;
cons.onclick = reTurn;