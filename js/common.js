$(function(){
	// smooth scroll
	$(function (scroll){
		var $page = $('html, body');
		$('a[href*="#"]').click(function() {
		    $page.animate({
		        scrollTop: $($.attr(this, 'href')).offset().top
		    }, 400);
		    return false;
		});
	});
	// img to svg 
	$('img.img-svg').each(function(){
	  var $img = $(this);
	  var imgClass = $img.attr('class');
	  var imgURL = $img.attr('src');
	  $.get(imgURL, function(data) {
	    var $svg = $(data).find('svg');
	    if(typeof imgClass !== 'undefined') {
	      $svg = $svg.attr('class', imgClass+' replaced-svg');
	    }
	    $svg = $svg.removeAttr('xmlns:a');
	    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	    }
	    $img.replaceWith($svg);
	  }, 'xml');
	});
	//slick
	$('.head-slider').slick({
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		nextArrow: '<button class="head-slider__arrow-next" arial-label="Next"><img src="img/arrow.svg"></button>',
		prevArrow: '<button class="head-slider__arrow-prev" arial-label="Prev"><img src="img/arrow.svg"></button>',
	});
	//burger
	$(function (burger){
		$('.burger').click(function(){
			$('.burger,.header__nav,.header__logo').toggleClass('active');
			$('.blur-container').toggleClass('active');
			$('body').toggleClass('lock');
		});
		$(document).mouseup(function (e){
			if (!$(".nav-list__item,.burger").is(e.target)) {
				$(".header__nav,.burger,.header__logo").removeClass("active");
				$('.blur-container').removeClass('active')
				$('body').removeClass('lock');};
		});
		$(window).scroll(function (){
			if ($(window).scrollTop()>= 35){
				$('.header__logo').addClass('hidden')
			}else{
				$('.header__logo').removeClass('hidden')
			}
		});
	});
});