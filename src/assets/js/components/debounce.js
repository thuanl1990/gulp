module.exports = (func, wait) => {
	let timeout;

    return function() {
        let context = this,
        args = arguments;

        let executeFunction = function() {
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(executeFunction, wait);
    };
}