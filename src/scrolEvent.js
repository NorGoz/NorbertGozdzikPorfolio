const aboutMeTitle = document.querySelector('.aboutMe__title');
const aboutMeLine = document.querySelector('.aboutMe__line');
const skilsTxt = document.querySelector('.skils__txt');
const projectsTitle = document.querySelector('.projects__title');
const projectsLine = document.querySelector('.projects__line');
const contactTitle = document.querySelector('.contact__title');
const contactLine = document.querySelector('.contact__line');
const menu = document.querySelector('.home__menu');
const webNote = document.querySelectorAll('.webNote');
const link = document.querySelectorAll('.home__link');

function checkActive(){
    link.forEach( item => {
        if(item.classList.contains('active')){
            item.classList.remove('active')
        } else {
            return
        }
    })
}


function addActiveClass(title,line){
    if(title){
    title.classList.add('activeMove');
    }
    if(line){
    line.classList.add('activeMove');
    }
}

function reset() {
        const titles = [...document.querySelectorAll('.title')];
        const lines = [...document.querySelectorAll('.line')];
        const webItem = [...webNote];
        const allActives = webItem.concat(titles.concat(lines));
    for (const item of allActives) {
            if(item.classList.contains('activeMove')){
                item.classList.remove('activeMove');
            }
            if(item.classList.contains('activeShow')){
                item.classList.remove('activeShow');
            }
    }
}

window.addEventListener('scroll',function (){
    const windowHeight = this.innerHeight;
    const scrollValue = this.scrollY;
    const aboutFromTop = aboutMeTitle.offsetTop;
    const aboutHeight = aboutMeTitle.offsetHeight;


    if(scrollValue - windowHeight > 0) {
        menu.classList.add('activePositionFixed')
    }
    if(scrollValue - windowHeight < 0) {
        menu.classList.remove('activePositionFixed')

    }

    if(scrollValue > aboutFromTop + aboutHeight - windowHeight ){
        addActiveClass(aboutMeTitle,aboutMeLine);
        webNote.forEach(item => {
            item.classList.add('activeShow');
        })
    }
    const skilsFromTop = skilsTxt.offsetTop;
    const skilsHeight = skilsTxt.offsetHeight;
    if(scrollValue > skilsFromTop + skilsHeight - windowHeight ){
        checkActive()
        link[1].classList.add('active')
        addActiveClass(skilsTxt);

    }

    const projectsFromTop = projectsTitle.offsetTop;
    const projectsHeight = projectsTitle.offsetHeight;
    if(scrollValue > projectsFromTop + projectsHeight - windowHeight ){
        checkActive()
        link[2].classList.add('active')
        addActiveClass(projectsTitle,projectsLine);
    }
    const contactFromTop = contactTitle.offsetTop;
    const contactHeight = contactTitle.offsetHeight;
    if(scrollValue > contactFromTop + contactHeight - windowHeight ){
        checkActive()
        link[3].classList.add('active')
        addActiveClass(contactTitle,contactLine);
    }
    if(scrollValue < 10){
        checkActive()
        reset()

    }
})