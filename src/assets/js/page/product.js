 const modal = require('../components/modal')

 document.addEventListener( 'DOMContentLoaded', function() {

	var secondarySlider = new Splide( '.splide-thumb', {
		rewind      : true,
		fixedWidth  : 92,
		fixedHeight : 92,
		isNavigation: true,
		gap         : 20,
		focus       : 'center',
		pagination  : false,
		arrows		: false,
		cover       : true,
		breakpoints : {
			'600': {
				fixedWidth  : 75,
				fixedHeight : 75,
				gap: '13px'
			}
		}
	}).mount();

	// Create the main slider.
	var primarySlider = new Splide('.splide-top' , {
		type       : 'fade',
		heightRatio: 0.5,
		fixedHeight : '300px',
		pagination : false,
		arrows     : true,
		cover      : true,
	})

	// Set the thumbnails slider as a sync target and then call mount.
	primarySlider.sync( secondarySlider ).mount(); 

	// modal init
	modal()
})