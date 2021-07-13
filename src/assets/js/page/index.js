const _$            = require('../components/selector'); // document.querySelector()
const _$All         = require('../components/selectorAll'); // document.querySelector()
const removeClass   = require('../components/removeClass');
const breakpoint    = require('../components/breakpoint');
const debounce      = require('../components/debounce');
const _isTopPage    = _$('[data-page="home"]');
const _allCategory  = _$All('.category-content');
let _close          = _$('.brand-close');
let nodeBrand       = _$('.brand');
let vw              = window.innerWidth;
let arr             = [4, 8, 12, 16];
let categoryTotal   = _allCategory.length/2; 
let device          = ''

function checkDevice() {
    vw < breakpoint.sm 
        ? device = '.sp'
        : device = '.pc'
}

function checkVW() {
    arr = [4, 8, 12, 16]
    vw = window.innerWidth
    if (vw <= breakpoint.md && vw > breakpoint.sm) {
        arr = [3, 6, 9, 12, 15, 18, 21]
    } else if (vw <= breakpoint.sm) {
        arr = [2, 4, 6, 8, 10, 12, 14, 16, 18]
    }
    //console.log(arr)
}

window.addEventListener('DOMContentLoaded', function () { 
    selectCategory()
    checkVW()
    checkDevice()
    if(_isTopPage) { 
        splideNews()
        splideCategory()
    }
})

window.addEventListener('resize', debounce(function(e) {
    checkVW()
    splideCategory()
    checkDevice()
}, 400))

function splideNews() {
    new Splide('.splide-banner' , {
        type: 'loop',
        autoplay: true,
        arrows: false,
        speed: '800',
        interval: 4000,
        pagination: true,
        lazyLoad: 'nearby'
    }).mount()
    new Splide('.splide-news' , {
        type: 'loop',
        //autoplay: true,
        //interval: '0',
        //speed: '20000',
        pagination: false,
        gap: '40px'
    }).mount()
}
function splideCategory() {
    vw < breakpoint.sm
        ? new Splide( '.category-splide' , {
            type: 'slide',
            //autoplay: true,
            //interval: '0',
            //speed: '20000',
            pagination: true,
            arrows: false,
            gap: '40px'
        }).mount()
        : vw
}

function selectCategory() {
    _allCategory.forEach(function (el) {
        el.addEventListener('click', function (e) {
            let brand = this.dataset.brand
            let category = this.dataset.category
            let brandObj = JSON.parse(brand)
            removeClass(_$All('.category-item'), 'active')
            this.closest('.col-3').classList.add('active')
            nodeBrand ? nodeBrand.remove() : nodeBrand
            getData(this, brandObj, category)
        })
    })
}

function getData(el, brandObj, link) {
    let brandLogo = '';

    brandObj.forEach(function(item) {
        brandLogo += `<div class="col-3"> <a href="${item.link}" class="brand-item"><img src="${item.img}" alt=""></a></div>`
    })
    let html = `
    <div class="col-12 brand">
    <div class="brand-content">
    <div class="brand-head">
    <div class="row items-center">
    <div class="brand-title">Marker list</div>
    <div class="brand-cta"><a href="${link}">Category top</a><div class="brand-close"></div></div></div></div>
    <div class="brand-list row gx-45">
    ${brandLogo}
    </div>
    </div>
    </div>`
    appendHTML(el, html)
}

function appendHTML(el, str) {
    let target = Number(el.dataset.target)
    arr.forEach(function (val, i, ar) {
        if (target <= val) {
            try {
                _$(`${device} [data-item="${val}"]`).insertAdjacentHTML('afterend', str);
            } catch (error) {
                _$(`[data-item="${categoryTotal}"]`).insertAdjacentHTML('afterend', str);
            }
            ar.length = i + 1 //split array stop loop
        }
    })
    nodeBrand = _$('.brand')
    setTimeout(function () {
        nodeBrand.classList.add('open')
    }, 100)
    _close = _$('.brand-close')
    closeBrand()
    checkVW() //return array
}

function closeBrand() {
    _close.addEventListener('click', function () {
        nodeBrand.style.maxHeight = 0
        removeClass(_$All('.category-item'), 'active')
        setTimeout(function () {
            nodeBrand.remove()
        }, 650)
    })
} 
