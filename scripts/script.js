"Use strict";

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const hamburgerArr = [hamburger.querySelector('.top'),hamburger.querySelector('.middle'),hamburger.querySelector('.bottom')];





menu.addEventListener('click',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('hamburger')){
        hamburgerArr.forEach(item=>item.classList.toggle('active'));
    }
})

