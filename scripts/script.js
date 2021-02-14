"Use strict";

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav_menu');
const hamburgerArr = [hamburger.querySelector('.top'),hamburger.querySelector('.middle'),hamburger.querySelector('.bottom')];





menu.addEventListener('click',(e)=>{
    const target = e.target;
    if(target&&target.classList.contains('check')){
        hamburgerArr.forEach(item=>item.classList.toggle('active'));
        navMenu.classList.toggle('active');
        document.querySelector('body').classList.toggle('hidden');
    }
})

