$(document).ready(function (){
  // Скролл
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
    e.preventDefault();
  });

  // моб меню
  let menu = $('.mob-menu'),
    overlay = $('.menu'),
    link = $('.menu a');
  menu.on("click", function () {
    overlay.toggleClass('menu-active');
    $('.menu-active').css({
      "animation":"fadein .5s"
    });
    menu.toggleClass('mob-menu-active');
  });

  link.on("click", function () {
    overlay.removeClass('menu-active');
    menu.removeClass('mob-menu-active');
  });
  // аккордеон
  $('.headline-accordeon_click').next().hide();

  $('.headline-accordeon_click').click(function () {
      $(this).toggleClass('headline-accordeon_click-active');
    $(this).next().slideToggle();
    $('.headline-accordeon_click').not(this).removeClass('headline-accordeon_click-active').next().stop(true, true).slideUp();
  });
  // toTop
  	$(function() {

 $(window).scroll(function() {
 	if($(this).scrollTop() != 0) {
		$('.toTop').fadeIn();
 	} 
 	else {
 		$('.toTop').fadeOut();
 	}
 });
 $('.toTop').click(function() {
 $('body,html').animate({scrollTop:0},800);
 });
});		
  
});