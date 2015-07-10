$(document).ready(function(){
	$('.my_slick ul').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1 ,
		centerMode: true,
		swipe: true,
		touchMove: true,
		arrows: true,
		asNavFor: '.my_slick-nav ul',
		accessibility: true
	});

	$('.my_slick-nav ul').slick({
		slidestoShow: 3,
		slidesToScroll:1,
		asNavFor: '.my_slick ul',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});

});