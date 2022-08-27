const openBtn = document.querySelector('.hambuger');
const closeBtn = document.querySelector('.close');
const navbarMobile = document.querySelector('.navbar-mobile');

function openMenu(){
    navbarMobile.classList.add('active')
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block'
}

function closeMenu(){
    navbarMobile.classList.remove('active');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);