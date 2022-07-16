const tombol_nav = document.querySelector('.tombol-nav input');
const nav = document.querySelector('nav ul');

tombol_nav.addEventListener('click', function(){
    nav.classList.toggle('slide');
})
