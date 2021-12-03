const  form = document.querySelector('.contact__form');

form.addEventListener('submit',e=> {
    e.preventDefault();
    console.log('click')
    alert('Niestety formularz aktualnie nie działa proszę o kontakt bezśporednio na email: norgozwork@gmail.com')
})
