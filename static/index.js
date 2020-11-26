
navBar=document.querySelector(".navBar");
navMenu=document.querySelector("#navMenu");
logo=document.querySelector("#logo");
burger=document.querySelector("#burger");

burger.addEventListener('click',()=>{
    navBar.classList.toggle('navHeight');
    navMenu.classList.toggle('opacity');
    logo.classList.toggle('opacity');
})

// const onloadFunc=()=>{
//     let anchors=document.getElementsByClassName('.a');
    
//     for (let i = 0; i < anchors.length; i++){
//         anchors[i].addEventListener('click',()=>{
//             let current=document.getElementsByClassName('active');
//             current[0].className=current[0].className.replace('active','');
//             this.className+='active';
//             console.log('class has been succefully added')
//         });
//     }
// }

// onloadFunc();