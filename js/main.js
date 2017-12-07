$(document).ready(function(){
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 150){
            $('header').addClass('py-2');
        } else{
            $('header').removeClass('py-2');
        }
    });
    
    $('.navbar-nav a').click(function(){
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    });
    
    if($('.bxslider').length > 0){
        $('.lead-slider').bxSlider();
    }
    
    
    
    
});