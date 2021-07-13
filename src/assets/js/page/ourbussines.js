(function readyJS(win,doc) {
    let showCate=doc.querySelectorAll('.our-business__item--category')
    function toggle(event) {
        if(this.classList.contains('show-category')){
            this.classList.remove('show-category')
        } else {
            this.classList.add('show-category')
        }
    }

    showCate.forEach(item => {
        item.addEventListener('click', toggle, false);
    })
})(window, document);
