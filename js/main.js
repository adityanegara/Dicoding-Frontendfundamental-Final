
const header = document.querySelector('.main-header');
const menuBtn = document.querySelector('#menu-btn');
const menuIconLine = document.querySelector('.menu-icon');
window.addEventListener('scroll', () =>{
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
})

