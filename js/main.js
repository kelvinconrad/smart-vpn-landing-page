
//Initiating Feather Icons
feather.replace()

//Initializing Owl Corousel
$('.clients-corousel').owlCarousel({
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:8000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('.testimonial-corousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

// Smooth Scroll
let magicScroll = new MagicScroll({
    target: document.querySelector(".scrollableElement"),
    speed: 80,
    smooth: 12,
    current: 0 // position
});


//Scroll Reveal
var rafId = null;
var delay = 200;
var lTime = 0;

function scroll() {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height()
  var visibleTop = scrollTop + height;
  $('.reveal').each(function() {
    var $t = $(this);
    if ($t.hasClass('reveal_visible')) { return; }
    var top = $t.offset().top;
    if (top <= visibleTop) {
      if (top + $t.height() < scrollTop) {
        $t.removeClass('reveal_pending').addClass('reveal_visible');
      } else {
        $t.addClass('reveal_pending');
        if (!rafId) requestAnimationFrame(reveal);  
      }
    }
  });
}
function reveal() {
  rafId = null;
  var now = performance.now();
  
  if (now - lTime > delay) {
    lTime = now;
    var $ts = $('.reveal_pending');
    $($ts.get(0)).removeClass('reveal_pending').addClass('reveal_visible');  
  }
  
  
  if ($('.reveal_pending').length >= 1) rafId = requestAnimationFrame(reveal);
}

$(scroll);
$(window).scroll(scroll);
$(window).click(function() {
  lTime = performance.now() + 500;
  var top = $(window).scrollTop();
  $(window).scrollTop(top === 0 ? 1 : top-1);
});
