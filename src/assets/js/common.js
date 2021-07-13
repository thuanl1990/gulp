let cssVar          = require('./components/cssVar');
const smoothScroll  = require('./components/smoothScroll'); // document.querySelector() 
import './components/menu';
import '@splidejs/splide'; 
import './page/index';
import './page/product';
import './page/ourbussines';
function bannerGeneral() {
    const _wWin = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        _banner = document.getElementById('banner_general'),
        _container = document.getElementsByClassName('section-banner-general__title'),
        _img = document.getElementsByClassName('section-banner-general__img');
    if(_banner) {
        if(_wWin > 992) {
            let _pLeft = (_banner.clientWidth - _container[0].clientWidth);
            if (_pLeft > 0) {
                _img[0].style.paddingLeft = _pLeft / 2 + 'px';
            } else {
                _img[0].style.paddingLeft = "";
            }
        } else _img[0].style.paddingLeft = "";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    cssVar();
})

window.addEventListener('load', function() {
    smoothScroll()
    bannerGeneral();
})

window.addEventListener('resize', function() {
    cssVar();
    bannerGeneral();
})

window.addEventListener('scroll', function() {
    //menuScroll();
})
