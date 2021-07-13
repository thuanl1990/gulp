let i;

module.exports = (els, className, find = false) => {
    els.forEach(el => {
        find
        ? el.closest(find).classList.add(className) 
        : el.classList.add(className)
    }); 
}