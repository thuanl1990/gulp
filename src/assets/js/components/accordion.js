let removeClass = require('./removeClass');
const $target = document.querySelectorAll('[data-target]')
const totalTarget = $target.length
let i

const accordion = () => {
    for(i = 0; i < totalTarget; i++) {
        $target[i].addEventListener('click', function(e) {
            console.log(e)
            const _class = 'open';
            const _targetTo = document.querySelector(this.dataset.target)
            //const _class = this.dataset.class
            //removeClass($_targetTo, 'open')
            //this.classList.toggle(_class)
            removeClass(document.querySelectorAll('.faq-item'), _class)
            _targetTo.classList.toggle(_class)
        })
    }
}

window.addEventListener('DOMContentLoaded', function() {
    totalTarget < 0
        ? false
        : accordion()
})

module.exports =  accordion