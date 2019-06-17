//  Menu & hamburger

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('on');
    menu.classList.toggle('active');
})

// Navigation

const nav = document.querySelectorAll('li a');

scrollTo = (element) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - 70
    });
}

closeNav = () => {
    menu.classList.remove('active');
    hamburger.classList.remove('on');
}

nav.forEach(anchor => {
    if (anchor.className) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.getElementById(`${this.className}`)
            scrollTo(section);
            closeNav();
        })
    }
})