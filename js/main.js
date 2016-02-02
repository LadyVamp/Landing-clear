  /*=============================
  Animation Conditions
  =============================*/

  $(window).scroll(function() {
        $('.left-condition').each(function(){
        var imagePos = $(this).offset().top;
 
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animated slideInLeft");
            }
        }); 

          $('.center-condition').each(function(){
        var imagePos = $(this).offset().top;
 
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animated slideInUp");
            }
        }); 

            $('.right-condition').each(function(){
        var imagePos = $(this).offset().top;
 
        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animated slideInRight");
            }
        }); 
    });