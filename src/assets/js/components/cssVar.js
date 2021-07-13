const _$ = require('./selector')
const mobile = require('./isMobile')
const root = document.querySelector(':root');
//let screenWidth = window.innerWidth
let scrollbar = mobile ? 0 : 15
//alert(mobile)

module.exports = () => {
    root.style.setProperty('--scrollbar', scrollbar + "px");
    root.style.setProperty('--vw', window.innerWidth + "px");
}