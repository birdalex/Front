$( document ).ready(function() {
              // Слайдер
    $('.slider-slick').slick(
    {
  
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'ease',
  // autoplay: true,
  autoplaySpeed: 4000,
  arrows:true
	});

   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
                      // моб меню
	let menu=$('.mob-menu'),
		overlay=$('.menu'),
    link=$('.menu a');
		menu.on("click", function(){
			overlay.toggleClass('menu-active');
			menu.toggleClass('mob-menu-active');
		});
    link.on("click", function(){
      overlay.removeClass('menu-active');
      menu.removeClass('mob-menu-active');
    });

    $('.main-btn').on('click',function(){
        $('.overlay').fadeIn(500);
    });
    				// upTop

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
                      // Скролл
    $("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top  }, 1000);
  e.preventDefault();
});
                    // Открытие окна скидки
   let priceLink=$('#price'),
       saleLink=$('#sale');
      $('.sale-block').css('display','none');
      priceLink.on('click',function(){
      $('.price>h1').text('Цены');
      $('#price').removeClass('animated');
      $('#sale').addClass('animated');
      $('.price-main-block').fadeIn(1000);
      $('.price-row-2-wrap').fadeIn(1000);
      $('.sale-block').css('display','none').fadeOut(1000);
        return false;
   });
       saleLink.on('click',function(){
        $('.price>h1').text('Скидки');
        $('#sale').removeClass('animated');
        $('#price').addClass('pulse animated');
        $('.price-main-block').css('display','none').fadeOut(1000);
        $('.price-row-2-wrap').css('display','none').fadeOut(1000);
        $('.sale-block').fadeIn(1000);
        return false;
   });
                  // Обратная связь
    $('.callback').on("click",function(){
        $('.overlay').fadeIn(500);
    }); 
    $('.popup-close').on("click",function(){
      $('.overlay').fadeOut(500);
    });  

                         // Услуги


      $('.services-block-btn').on('click',function(){
           var clickedBtn = this;
        $('.services-block-btn').each(function(i){
            if(clickedBtn == this){
        $('.services-blocks__none').each(function(){
            $('.services-blocks__none').eq(i).fadeOut(500).css('display','none');
        });
        $('.services-block__description').each(function(){
            $('.services-block__description').eq(i).fadeIn(500);
        });
            }     
        });
      });
      $('.services-block__description-close').on('click',function(){
        let clickedClose=this;
        $('.services-block__description-close').each(function(i){
            if(clickedClose == this){
              $('.services-block__description').each(function(){
                $('.services-block__description').eq(i).fadeOut(500).css('display','none');
              });
              $('.services-blocks__none').each(function(){
                $('.services-blocks__none').eq(i).fadeIn(500);
              });
            }
        });
      });
      $('.price-blocks-item>p').css('height', '').equalHeights();
});
