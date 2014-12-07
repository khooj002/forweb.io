var originalmap;
var flag = false;

var main = function(){
    $('.icon-menu').click(function() {
        $('.menu').animate({ 
            left:"0px"
        }, 200);
        
        $('body').animate({
            left: "285px"
        }, 200);
        if(flag == true){
                $('button-hide').replaceWith('button-appear');
                flag= false;
        }
    });
    
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    if(flag == true){
                $('button-hide').replaceWith('button-appear');
                flag= false;
        }
  });

  $('.icon-home').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    if(flag == true){
                $("button-hide").replaceWith("button-appear");
                flag= false;
        }
  });

  $('.icon-about').click(function() {
    $class="click-icon-about";
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    /*$('button-hide').replaceWith('<div class="button-appear">'+content+'</div>');*/
     //jQuery('button-hide').replaceWith(jQuery('button-appear'));
     if(flag == true){
                $('button-hide').replaceWith('button-appear');
                flag= false;
        }
  });

  $('.icon-contact').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    if (flag == false ){
      flag = true;
      $("button-appear").replaceWith("button-hide");
    }
  });
};

$(document).ready(main);