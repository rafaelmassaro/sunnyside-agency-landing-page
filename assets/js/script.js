const button = document.getElementById('menu-button');

function showMobileMenu(){
    const header = document.querySelector('.header');

    header.classList.toggle('active');
}

button.addEventListener('click', showMobileMenu) 