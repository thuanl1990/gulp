let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

module.exports = () => {
    let targets = document.querySelectorAll('[data-scrollto]')
    let i
    let targetNum = targets.length;
    if (targetNum >= 1) {
        for (i = 0; i < targets.length; i++) {
            targets[i].addEventListener('click', function(e) {
                e.preventDefault()
                var target = this.dataset.scrollto
                var targetTo = offsetY(document.querySelector(target))
                var offsetPlus = Number(this.dataset.offset)
                var menuHeight  = mobile ? 88 : 130
                let to = targetTo - menuHeight - offsetPlus

                console.log(targetTo)
                window.scroll({
                    top: to,
                    left: 0,
                    behavior: 'smooth'
                })
                //scrollTo(target);
            })
        }
    }
}

function offsetY(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
}