const _$ = require('./selector'); // document.querySelector()
const _$All = require('./selectorAll'); // document.querySelector()
const removeClass = require('./removeClass');
const breakpoint = require('./breakpoint')
const html = _$('html');
const header = _$('.header');
const btnBurger = _$('.btn-menu__icon');
const _submenu = _$All('.has-submenu')
let menuOpen = false;

const menuActive = () => {
    try {
        const page = document.querySelector('[data-page]').dataset.page
        document.querySelector(`[data-menu="${page}"]`).classList.add('active')
    } catch (error) {
        console.log('not page active in menu')
    }
}

const btnMenu = () => {
    btnBurger.addEventListener('click', function(e) {
        removeClass(_$All('.lines'), 'disableAnimation')
        toggleMenu()
    })
}

const toggleMenu = () => {
    btnBurger.classList.toggle('active')
    _$('html').classList.toggle('menu-open')
    menuOpen = !menuOpen
    //menuOpen ? false : removeClass(submenu, 'expanded')
}


const menuScroll = () => {
    let windowPos = window.pageYOffset

    windowPos > 10
        ? header.classList.add('scroll')
        : header.classList.remove('scroll')
}

const subMenu = () => {
    _submenu.forEach(function(el) {
        el.addEventListener('click', function(e) {
            if (window.innerWidth < breakpoint.lg) { 
                e.preventDefault()
                this.classList.toggle('expanded')
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    menuActive()
    btnMenu()
    menuScroll()
    subMenu()
})

document.addEventListener('scroll', () => {
    menuScroll()
})

