$(window).scroll(function(){
    var scrollPosition = $(this).scrollTop();
    
    $('.text').css({
        'transform': 'translate(10px, '+ scrollPosition/4 +'%)'
    });
    
    if(scrollPosition > ($('.icon').offset().top - ($(window).height() / 1.2))){
      
       $('.icon').each(function(i){
                setTimeout(function(){
                    $('.icon').eq(i).addClass('is-show');
                }, 400 * (i+1))
       });
    }
});