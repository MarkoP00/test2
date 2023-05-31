const btn1 = document.getElementsByClassName('button1')[0];
const btn2 = document.getElementsByClassName('btnEl2')[0];
const arrow1 = document.getElementById('makisa1');
const arrow2 = document.getElementById('makisa2');


const btn1Function = function(){
    window.location.href = "index.html"
}

const btn2Function = function(){
    window.location.href = "maki.html"
}

arrow1.addEventListener('click',btn1Function);
arrow2.addEventListener('click',btn2Function);
btn1?.addEventListener('click', btn1Function);
btn2.addEventListener('click', btn2Function);

