$(document).ready(function(){
	$('.my_slick ul').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1 ,
		centerMode: true,
		swipe: true,
		touchMove: true,
		arrows: true,
		asNavFor: '.my_slick-nav ul'
	});

	$('.my_slick-nav ul').slick({
		slidesToShow: 3,
		slidesToScroll:1,
		asNavFor: '.my_slick ul',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});

});