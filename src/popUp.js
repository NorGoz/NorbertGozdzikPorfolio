const projectLink = document.querySelectorAll('.projectLink');
const arrow = document.querySelectorAll('.arrow');
const modalWrap = document.querySelector('.modal__wrap');
const projectTitle = document.querySelector('.modal__title');
const projectTxt = document.querySelector('.modal__txt');
const formForButtons = document.querySelector('.modal__buttons');
const exitBtn  = document.querySelector('.modal__btn');
const modalPhoto = document.querySelector('.modal__photo');
const modalWeb = document.querySelector('.modal__web');

const portfolioImg=["./images/portfolio1.png","./images/portfolio2.png","./images/portfolio3.png","./images/portfolio4.png"];
const portfolioTxt='Najtrudniejsze w tym projekcie było wymyślenie sturktury. Projekt zrobiony z pomaca JavaScriptu i CSS ';
const portfolioLink ='https://norgoz.github.io/NorbertGozdzikPorfolio/';
const flashCardImg=["./images/flashCardView.png","./images/learn.png","./images/learnEND.png","./images/add.png","./images/add.png"];
const flashCardTxt = 'Najtrudniejsze w projekcie flashcard było dla mnie stworzenie logiki. ' +
    'Nie jest ona najlepsza ale cały czas się ucze i staram się poprawiać stare błędy. Projek został zrobiony z pomoca reacta oraz expressa.' +
    'Inspiracją były dla różne darmowe fiszki w internecie, zawsze coś mi w nich przeszkadzało więc postanowiłem napisać swój projekt do tego.';
const flashCardLink ='https://github.com/NorGoz/Flashcard-Project';





let index = 0;
const img = document.createElement("img");
modalPhoto.appendChild(img);

function changeModal(){
    if(!modalWrap.classList.contains('activeModal')){
        modalWrap.classList.add('activeModal')
    }else {
        resetPopUp()
    }

}
function resetPopUp(){
    modalWrap.classList.remove('activeModal');
    exitBtn.removeEventListener('click',changeModal)
    arrow.forEach(item => item.removeEventListener('click',changePhoto))
    img.classList.remove('portfolioImg');
    img.classList.remove('photoWebImg');
    img.classList.remove('flashCard');
    index = 0;
}
function offModal(){
    if(modalWrap.classList.contains('activeModal')){
        exitBtn.addEventListener('click',changeModal)
        arrow.forEach(item => item.addEventListener('click',changePhoto))
    }
}

function showPhoto(imgElement){
    if(imgElement.classList.contains('portfolioImg')){
        if(index >= portfolioImg.length){
            index = 0;
        }else if(index < 0){
            index = portfolioImg.length-1;
        }
        img.src = portfolioImg[index];
    }
    if(imgElement.classList.contains('flashCard')){
        if(index >= flashCardImg.length){
            index = 0;
        }else if(index < 0){
            index = flashCardImg.length-1;
        }
        img.src = flashCardImg[index];
    }
}

function changePhoto(){
    if(event.target.classList.contains('right') || event.target.parentNode.classList.contains('right')){
        index++;
    }else if(event.target.classList.contains('left') || event.target.parentNode.classList.contains('left')){
        index--;
    }
    showPhoto(img)
}
function chooseProject(projectName){
    if(projectName === 'portfolio'){
        img.classList.add('portfolioImg');
        showPhoto(img);
        projectTitle.textContent = 'Portfolio';
        projectTxt.textContent = portfolioTxt;
        modalWeb.href=portfolioLink;

    }else if(projectName === 'flashCard'){
        img.classList.add('flashCard');
        showPhoto(img);
        projectTitle.textContent = 'Flashcard Project';
        projectTxt.textContent = flashCardTxt;
        modalWeb.href=flashCardLink;
    }
}

projectLink.forEach(item => item.addEventListener('click',() => {

        changeModal()
        offModal();
        const projectName = event.target.parentNode.id
        chooseProject(projectName);
}))

