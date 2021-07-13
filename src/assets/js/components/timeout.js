module.exports = (func, wait) => {
    return function() {
        setTimeout(func, wait)
    };
}