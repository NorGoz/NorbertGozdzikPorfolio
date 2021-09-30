const projectLink = document.querySelectorAll('.projectLink');
const arrow = document.querySelectorAll('.arrow');
const modalWrap = document.querySelector('.modal__wrap');
const projectTitle = document.querySelector('.modal__title');
const projectTxt = document.querySelector('.modal__txt');
const formForButtons = document.querySelector('.modal__buttons');
const exitBtn  = document.querySelector('.modal__btn');
const modalPhoto = document.querySelector('.modal__photo')

const portfolioImg=["./images/portfolio1.png","./images/portfolio2.png","./images/portfolio3.png","./images/portfolio4.png"];
const portfolioTxt='Najtrudniejsze w tym projekcie było wymyślenie sturktury. Projekt zrobiony z pomaca JavaScriptu i CSS ';
const portfolioLink ='';
const photoWebImg =["./images/services1.png","./images/services2.png","./images/services3.png"];
const photoWebTxt =' simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr';




let index = 0;
const img = document.createElement("img");
modalPhoto.appendChild(img);

function changeModal(){
    if(!modalWrap.classList.contains('activeModal')){
        modalWrap.classList.add('activeModal')
    }else {
        reset()
    }

}
function reset(){
    modalWrap.classList.remove('activeModal');
    exitBtn.removeEventListener('click',changeModal)
    arrow.forEach(item => item.removeEventListener('click',changePhoto))
    img.classList.remove('portfolioImg');
    img.classList.remove('photoWebImg');
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
        }
        img.src = portfolioImg[index];
    }
    if(imgElement.classList.contains('photoWebImg')){
        if(index >= photoWebImg.length){
            index = 0;
        }
        img.src = photoWebImg[index];
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

    }else if(projectName === 'photoWeb'){
        img.classList.add('photoWebImg');
        showPhoto(img);
        projectTitle.textContent = 'Photo Web';
        projectTxt.textContent = photoWebTxt;
    }
}

projectLink.forEach(item => item.addEventListener('click',() => {

        changeModal()
        offModal();
        const projectName = event.target.parentNode.id
        chooseProject(projectName);
}))

