$(document).ready(function() {
  
  setTimeout(function() {
    $('.loader').fadeOut(300, function(){
      $('.header__menu-list, .promo').addClass('tdFadeIn');
    });
  }, 300);

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var elementId = $(this).attr('href');
    $('body, html').animate({
      scrollTop: $(elementId).offset().top
    },1000)
    if ($(this).hasClass('mob-link')) {
      $('.header__mob').removeClass('active');
    }
  })
  
  $('.hamburger').click(function() {
    $('.header__mob').addClass('active');
  })
  $('.close').click(function() {
    $('.header__mob').removeClass('active');
  })

  $(window).scroll(function() {
    var scrolled = $(this).scrollTop();
    var st = scrolled / 40;

    $(".promo").css({
      "transform" : "translate3d(0, " + "-" + st  + "%, 0)"
    });

    // if (scrolled > $(this).height() / 4) {
    //   var a = scrolled - $(this).height() / 4;

    //   $(".promo").css({
    //       "opacity" : 50 / a
    //   });
    // } else {
    //     $(".promo").css({
    //         "opacity" : 1
    //     });
    // }
  });


  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "../mail.php",
      data: $(this).serialize()
    }).done(function() {
      alert("доне");
    });
    return false;
  });

  var video = $('#myVideo');
  var pauseBtn = $('.promo__button');

  pauseBtn.mouseenter(function() {
    video[0].pause();
    $('.video-container').addClass("stopfade");
    $('.promo__title span').addClass("shadow");
  });
  pauseBtn.mouseleave(function() {
    video[0].play();
    $('.video-container').removeClass('stopfade');
    $('.promo__title span').removeClass("shadow");
  });
  
  $('.types').hover(function() {
      $(this).find('.types-description span').text(':');
  },function() {
    $(this).find('.types-description span').text('.');
  });



  var old = false,
      area = 0,
      complete = true,
      design = false,
      price = 0;
  $('.step-1 input').click(function(){
    $('.step-2').addClass('active').siblings().removeClass('active');
    if($('.repair-old').is(':checked')) {
      old = true
    } else {
      old = false
    }
  })
  $('.step-2 button').click(function(){
    $('.step-3').addClass('active').siblings().removeClass('active');
    area = $('.step-2 input').val();
  })
  $('.step-3 button').click(function(){
    $('.calculate-result').addClass('active').siblings().removeClass('active');
    if ($('.repair-complete').is(':checked')) {
      price = area * 6500;
      if (old) {
        price += price * 0.2
      }
    } else {
      price = area * 2900;
      if (old) {
        price -= price * 0.1;
      }
    }
    if($('.design-project').is(':checked')) {
      price += area * 1000;
    }
    $('.calculate-result .price').html(price);
  })
  $('.back').click(function(){
    $('.step-1').addClass('active').siblings().removeClass('active');
  })
});

