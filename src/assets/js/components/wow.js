let WOW = require('wowjs').WOW

module.exports = () => {
    new WOW({
        boxClass:     'animation',      
        animateClass: 'is-animated', 
        offset:       200,        
        mobile:       true, 
        live:         true,
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,
    }).init()
}