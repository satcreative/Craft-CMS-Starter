jQuery(function ($) {

$(".headerNav__icon").click(function(){
	if($(this).hasClass('icon-menu')) {
		$(this).removeClass('icon-menu');
		$(this).addClass('icon-close');
		$('#headerNav').addClass('open');
	} else {
		$(this).removeClass('icon-close');
		$(this).addClass('icon-menu');
		$('#headerNav').removeClass('open');
	}
});

});