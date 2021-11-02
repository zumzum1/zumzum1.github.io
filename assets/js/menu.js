$(document).ready(function(){
     $('#openMenu').click(function(){
          $('#menu').css('top', '0');
     });

     $('#closeMenu').click(function(){
          $('#menu').css('top', '100%');
     });

     $('#menu ul li:last-child').click(function(){
          $('#menu').css('top', '100%');
     });
});
