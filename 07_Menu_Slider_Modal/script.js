const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// toggle Navigation
toggle.addEventListener('click', (e) => {
    document.body.classList.toggle('show-nav');
});

// show modal
open.addEventListener('click', (e) => {
    modal.classList.add('show-modal');
});

// hide modal
close.addEventListener('click', (e) => {
    modal.classList.remove('show-modal');
});

// hide modal outside click
window.addEventListener('click', (e) => {
    e.target == modal ? modal.classList.remove('show-modal') : false;
});