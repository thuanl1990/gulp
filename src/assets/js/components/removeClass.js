let i;

module.exports = (els, className, find) => {
    els.forEach(el => {
        find
        ? el.closest(find).classList.remove(className) 
        : el.classList.remove(className)
    }); 
}