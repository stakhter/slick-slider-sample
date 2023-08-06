//js code






//jq code
$(document).ready(function(){

// slick slider
	$('.wrapper').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		speed: 300,
  		arrows: false,
  		autoplay: true,
  		autoplaySpeed: 2000,

  		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		         slidesToShow: 2,
  				slidesToScroll: 1,
		      }
    		},
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
  				slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		        slidesToShow: 1,
  				slidesToScroll: 1,
		      }
		    }
  			]
	});
	
})