const hamburgerBtn = document.querySelector('.hamburger');
const navigationList = document.querySelector('.home__lists');

hamburgerBtn.addEventListener('click',()=>{
    navigationList.classList.toggle('activeFlex')

})

const projects = document.querySelectorAll('.project');
const projectView = document.querySelectorAll('.projectDescription');

const portfolioElement = document.getElementById('portfolio');
const flashCard = document.getElementById('flashCard');

function checkActiveClass(){
        projectView.forEach( item => {
            if(item.classList.contains('activeFlex')){
                item.classList.remove('activeFlex')
            } else {
                return
            }
        })
}

for (const project of projects) {
    project.addEventListener('mouseover',() => {
        if(event.target.classList.contains('project') || event.target.classList.contains('projectDescription')) {

            if (!event.target.classList.contains('activeFlex')) {
                checkActiveClass();
            }

            if (event.target.classList.contains('portfolio')) {
                portfolioElement.classList.add('activeFlex')
            }else if (event.target.classList.contains('flashCard')){
                flashCard.classList.add('activeFlex')
            }
        }
    })
}
