$('.slide__h-menu').on('click', 'a', function(even){
	even.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 500);
});

// $(document).ready(function(){
// 	$('.slide-4:has(a)').css('background','green');
// });

$(window).scroll(function(){
	var distanse_menu = $('#about__us').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('header').css('background','rgba(250,250,250, 0.7)');
	}
	else {
		$('header').css('background','transparent');
	}
});


// $('.berry').hide();

// $(window).scroll(function(){
// 	var berry = $('#about__us').offset().top;
// 	if ($(window).scrollTop() > berry){
// 		$('.berry').show(1000);
// 	}
// 	else {
// 		$('.berry').hide();
// 	}
// });