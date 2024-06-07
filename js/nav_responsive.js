document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu-icon');
    const nav = document.getElementById('ull');

    menu.addEventListener('click', function () {
        if (nav.classList.toggle('show')) {
        }
    });

});