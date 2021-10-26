$(document).ready(function(){
     $('.nav-bar').wrap('<div class="nav-bar-placeholder"></div>');
     $('.nav-bar-placeholder').height($('.nav-bar').outerHeight());

     var navOffset = $('.nav-bar-placeholder').offset().top;
     var scrollPosition = $(window).scrollTop();

     if(scrollPosition >= navOffset){
          $('.nav-bar').addClass('fixed');
     }
     else {
          $('.nav-bar').removeClass('fixed');
     };

     $(window).scroll(function(){
          var scrollPosition = $(window).scrollTop();
          var navOffset = $('.nav-bar-placeholder').offset().top;
          if (scrollPosition >= navOffset) {
               $('.nav-bar').addClass('fixed');
          }
          else {
               $('.nav-bar').removeClass('fixed');
          }
     });
});
