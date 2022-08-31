
let = timer;

function nome() {
    timer=setTimeout(function() {
       document.querySelector(".demo").innerHTML= 'Renata';
    }, 2000);
}
function parar(){
    clearTimeout(timer);
}
