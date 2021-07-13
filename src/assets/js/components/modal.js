//et removeClass = require('./removeClass');
const _$ = require('./selector');
const _$All = require('./selectorAll');
const $action = _$All('[data-open]');
const $close = _$All('[data-close]');
const _class = 'open';
let totalAction = $action.length;
let $target;
let i;

const modal = () => {
    for(i = 0; i < totalAction; i++) {
        $action[i].addEventListener('click', function(e) {
            let modalName = this.dataset.open
            _$('html').classList.add('modal-open')
            $target = _$(`[data-modal="${modalName}"]`)
            $target.style.display = 'block'
            setTimeout(function() {
                $target.classList.add(_class)
            }, 10)
        })
    }
    for(i = 0; i < $close.length; i++) {
        $close[i].addEventListener('click', function(e) {
            _$('html').classList.remove('modal-open')
            $target.classList.remove(_class)
            $target.style.display = 'none'
        })
    }
}

module.exports =  modal