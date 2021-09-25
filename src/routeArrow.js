const homeBtn = document.querySelector('.home__btn');
const arrow = document.querySelector('.fa-arrow-right');
homeBtn.addEventListener('mouseover',()=>{
    arrow.classList.add('routeArrow');
})
homeBtn.addEventListener('mouseout',()=>{
    arrow.classList.remove('routeArrow')
})
