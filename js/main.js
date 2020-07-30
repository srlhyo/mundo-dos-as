
// Jquery Smooth scrolling
$('nav a').on('click', function(e) {
    if (this.hash !== "") {
        e.preventDefault();
    }

    const hash = this.hash

    $('html, body').animate(
        {
            scrollTop: $(hash).offset().top
        },
        800
    );
});

var menu = document.getElementById('menuId');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
});