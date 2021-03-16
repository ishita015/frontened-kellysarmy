/*------------------------------------
	Sidebar JS
--------------------------------------*/
function sidebarHeightCalc(){
	if($(window).width() >= 992){
		var windowHeight = $(document).outerHeight();
		var footerHeight = $('.footer').outerHeight();
		var remHeight = windowHeight - footerHeight;
		// console.log('windowHeight =>' + windowHeight);
		// console.log('footerHeight =>' + footerHeight);
		// console.log(remHeight);
		// $('.sidebar-wrapper').css('min-height', remHeight - 500);
	}
}
/*------------------------------------
	Sidebar JS
--------------------------------------*/

(function ($) {

	'use strict';

	/*------------------------------------
		Preloader
	--------------------------------------*/
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow-x': 'hidden' });
	})
	/*------------------------------------
		Preloader
	--------------------------------------*/

	/*------------------------------------
		Testimonial Slider
	--------------------------------------*/
	if (jQuery(".testimonial-slider .swiper-container").length > 0) {
		let gallerySlider1 = new Swiper('.testimonial-slider .swiper-container', {
			slidesPerView: 2,
			loop: true,
			spaceBetween: 0,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: '.testi_swiper_nav_next',
				prevEl: '.testi_swiper_nav_prev',
			},
			breakpoints:{
				767: {
					slidesPerView: 2,
				},
				630: {
					slidesPerView: 1,
				},
				540: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
			},
			a11y: false
		})
	}
	/*------------------------------------
		Testimonial Slider
	--------------------------------------*/

	/*------------------------------------
		How it Works Slider
	--------------------------------------*/
	if (jQuery(".how-it-works-swiper .swiper-container").length > 0) {
		let gallerySlider2 = new Swiper('.how-it-works-swiper .swiper-container', {
			slidesPerView: 'auto',
		      spaceBetween: 24,
		      // pagination: false,
		      loop: true,
		      pagination: {
		        el: '.howitworks-pagination-swiper',
		        type: 'progressbar',
		      },
		      navigation: {
				prevEl: '.howitwork_nav_left',
				nextEl: '.howitwork_nav_right',
			  },
			  breakpoints:{
			  	1024:{
			  		slidesPerView: 'auto',
			  	},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
				
			},
			a11y: false
		})
	}
	/*------------------------------------
		How it Works Slider
	--------------------------------------*/


	/*------------------------------------
		Login Page Form JS
	--------------------------------------*/
	const setActive = (el, active) => {
      const formField = el.parentNode.parentNode
      if (active) {
        formField.classList.add('form-field--is-active')
      } else {
        formField.classList.remove('form-field--is-active')
        el.value === '' ? 
          formField.classList.remove('form-field--is-filled') : 
          formField.classList.add('form-field--is-filled')
      }
    }

    [].forEach.call(
      document.querySelectorAll('.form-field__input, .form-field__textarea'),
      (el) => {
        el.onblur = () => {
          setActive(el, false)
        }
        el.onfocus = () => {
          setActive(el, true)
        }
      }
    )
    /*------------------------------------
		Login Page Form JS
	--------------------------------------*/


	/*------------------------------------
		Testimonial Slider
	--------------------------------------*/
	if (jQuery(".testimonial-swiper .swiper-container").length > 0) {
		let gallerySlider2 = new Swiper('.testimonial-swiper .swiper-container', {
			slidesPerView: 3,
		      spaceBetween: 24,
		      // pagination: false,
		      loop: true,
		      pagination: {
		        el: '.testimonial-pagination',
		        clickable: true,
		      },
			  breakpoints:{
			  	1024:{
			  		slidesPerView: 3,
			  	},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
				
			},
			a11y: false
		})
	}
	/*------------------------------------
		Testimonial Slider
	--------------------------------------*/

	/*------------------------------------
		Mobile Sidebar JS
	--------------------------------------*/
	$('.toggle-mobile').click(function(){
		$(this).parents('.sidebar-wrapper').toggleClass('activenavs');
	});
	$(document).click(function(event){
	    // Check if clicked outside .target-div
	    if (!(jQuery(event.target).closest(".sidebar-wrapper").length)) {
	        // Hide .target-div
	        jQuery(".sidebar-wrapper").removeClass('activenavs');
	    }
	});
	/*------------------------------------
		Mobile Sidebar JS
	--------------------------------------*/

	/*------------------------------------
		Sidebar JS
	--------------------------------------*/
	sidebarHeightCalc();
	/*------------------------------------
		Sidebar JS
	--------------------------------------*/

	/*------------------------------------
		My Team Slider
	--------------------------------------*/
	if (jQuery(".my-team-swiper .swiper-container").length > 0) {
		let gallerySlider2 = new Swiper('.my-team-swiper .swiper-container', {
			slidesPerView: 3,
		      spaceBetween: 10,
		      // pagination: false,
		      loop: true,
		      pagination: {
		        el: '.team-pagination',
		        clickable: true,
		      },
			  breakpoints:{
			  	1024:{
			  		slidesPerView: 3,
			  	},
				768: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
				
			},
			a11y: false
		})
	}
	/*------------------------------------
		My Team Slider
	--------------------------------------*/

	

})(jQuery);

/*------------------------------------
	Sidebar JS
--------------------------------------*/
var resizeTimer = null;
$(window).resize(function (){
  clearTimeout(resizeTimer);
   resizeTimer= setTimeout(function(){
 	sidebarHeightCalc();
   }, 10);
});
/*------------------------------------
	Sidebar JS
--------------------------------------*/