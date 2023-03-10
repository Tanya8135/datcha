$(document).ready(function() {
    $('.slider-room').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 3,
      arrows: true,
      prevArrow: $('.arrow-room-l'),
      nextArrow: $('.arrow-room-r'),
      swipe: true
    });
  });

  $(document).ready(function() {
    $('.slider-general').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 3,
      arrows: true,
      prevArrow: $('.arrow-general-l'),
      nextArrow: $('.arrow-general-r'),
      swipe: true
    });
  });