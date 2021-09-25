const hamburgerBtn = document.querySelector('.hamburger');
const navigationList = document.querySelector('.home__lists');
hamburgerBtn.addEventListener('click',()=>{
    navigationList.classList.toggle('activeFlex')
})

const projects = document.querySelectorAll('.project');
const projectView = document.querySelectorAll('.projectDescription');
const photoWeb = document.getElementById('photoWeb');
const warriorGame = document.getElementById('warriorGame');
const blackJack = document.getElementById('blackJack');

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
    project.addEventListener('click',() => {
        if(event.target.classList.contains('project') || event.target.classList.contains('projectDescription')) {

            if (!event.target.classList.contains('activeFlex')) {
                checkActiveClass();
            }

            if (event.target.classList.contains('warriorGame')) {
                warriorGame.classList.add('activeFlex')
            } else if (event.target.classList.contains('photoWeb')) {
                photoWeb.classList.add('activeFlex')
            } else if (event.target.classList.contains('blackJack')) {
                blackJack.classList.add('activeFlex')
            }
        }
    })
}
