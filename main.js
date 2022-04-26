const menuOpen = document.getElementById('hamburgerMenu');
const navbarMenu = document.getElementById('navbarMenu');
const activePage = window.location.pathname;
const searchIcon = document.getElementById('searchIcon');
const searchOpen = document.getElementById('searchOpen');
const searchSpace = document.getElementById('searchSpace');

document.querySelectorAll('.navbar-menu .links ul li a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})

menuOpen.addEventListener("click",function(){
    navbarMenu.classList.toggle('navbar-toggle');
    menuOpen.classList.toggle('hamburger-menu-toggle');
});

searchIcon.addEventListener("click",function(){
    searchOpen.classList.toggle('search-toggle');
});

searchOpen.addEventListener('click', function(event) {
    var isClickInsideElement = searchSpace.contains(event.target);
    if (!isClickInsideElement) {
        searchOpen.classList.remove('search-toggle');
    }
});

