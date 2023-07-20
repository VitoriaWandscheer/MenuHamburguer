function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/hamburguer-menu-white.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/img/hamburguer-close-white.svg"
    }
}