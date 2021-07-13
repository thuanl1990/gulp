let vw = () => {
    return window.innerWidth
} // window width
 
const update = () => {
    vw()
}

window.addEventListener('resize', function() {
    update()
    module.exports = vw()
})

module.exports = vw()