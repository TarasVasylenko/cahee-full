$('.slide__h-menu').on('click', 'a', function(even){
	even.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 500);
});

$('.slide__next-link').click(function(){
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 500);
});

$(window).scroll(function(){
	var distanse_menu = $('#about__us').offset().top;
	if ($(window).scrollTop() > distanse_menu){
		$('header').css('background','rgba(250,250,250, 0.7)');
	}
	else {
		$('header').css('background','transparent');
	}
});

$('#show-menu').on('click', function(){
	if($('.slide__h-menu').hasClass('open')){
		$('.slide__h-menu').removeClass('open');
		$('#show-menu').find('span')
		.removeClass('icon-cross')
		.addClass('icon-menu');
	}else{
		$('.slide__h-menu').addClass('open');
		$('#show-menu').find('span')
		.removeClass('icon-menu')
		.addClass('icon-cross');
	}      
});

$(window).resize(function(){
	if ($(window).width() > 768){
		if($('.slide__h-menu').hasClass('open')){
			$('.slide__h-menu').removeClass('open')
			$('#show-menu').find('span')
			.removeClass('icon-cross')
			.addClass('icon-menu');
		}
	}
});



