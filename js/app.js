$(window).on('load', function() {
  $('img').cardify();
  /* ACTIVE MENU ACCORDING TO SCROLL */
  var section1OffsetTop = $('.section1').offset().top;
  var section2OffsetTop = $('.section2').offset().top;
  var section3OffsetTop = $('.section3').offset().top;
  var section4OffsetTop = $('.section4').offset().top;

  $(document).on('scroll', function() {
    let scrollTop = $(document).scrollTop();
    var activeLi;

    if (scrollTop < (section2OffsetTop - 110)) {
      activeLi = $('.menu-items>li:nth-child(1)');
    } else if (scrollTop < (section3OffsetTop - 110)) {
      activeLi = $('.menu-items>li:nth-child(2)');
    } else if (scrollTop < (section4OffsetTop - 300)) {
      activeLi = $('.menu-items>li:nth-child(3)');
    } else {
      activeLi = $('.menu-items>li:nth-child(4)');
    }
    activeLi.addClass('on-section');
    $('.menu-items>li').not(activeLi).removeClass('on-section');
  });
});