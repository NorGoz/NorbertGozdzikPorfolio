const homeBtn = document.querySelector('.home__btn');
const arrowHome = document.querySelector('.fa-arrow-right');
homeBtn.addEventListener('mouseover',()=>{
    arrowHome.classList.add('routeArrow');
})
homeBtn.addEventListener('mouseout',()=>{
    arrowHome.classList.remove('routeArrow')
})
