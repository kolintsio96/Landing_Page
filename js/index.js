$(document).ready(function(){
	$('.header__slider').slick({
  		autoplay: true,
  		autoplaySpeed: 5000,
  	});
  	$('.caseStudy__block').slick({
	 	dots: true,
	  	infinite: true,
	  	autoplay: true,
	  	autoplaySpeed: 5000,
	  	cssEase: 'linear'
	});
	$('.services__slider').slick({
		autoplay: true,
  		autoplaySpeed: 5000,
	});
});