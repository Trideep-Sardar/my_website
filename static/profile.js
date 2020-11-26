navBar=document.querySelector(".navBar");
navMenu=document.querySelector("#navMenu");
logo=document.querySelector("#logo");
burger=document.querySelector("#burger");

burger.addEventListener('click',()=>{
    navBar.classList.toggle('navHeight');
    navMenu.classList.toggle('opacity');
    logo.classList.toggle('opacity');
})