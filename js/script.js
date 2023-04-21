// Toggle class active

const navbarNav = document.querySelector
    ('.navbar-nav');

// Ketika hamburger menu diklicing

document.querySelector('#hamburger-menu').
    onclick = () => {
        navbarNav.classList.toggle('active');
    };


//klicking di luar sidebar untuk menghilangkan kemunculan navbar menu.

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains (e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});