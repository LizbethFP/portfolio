$(window).on('load', function() {
  $('img').cardify();

  /* EFECTO DE GIRAR CERTIFICADOS AL PASAR MOUSE */
  $('.fa-certificate').on('mouseover', function() {
    $(this).transition({
      rotate: '10deg'
    });
  });

  /* EFECTO DE GIRAR CERTIFICADOS A SU POSICIÓN DE ORGINE AL SACAR EL MOUSE */
  $('.fa-certificate').on('mouseleave', function() {
    $(this).transition({
      rotate: '-10deg'
    });
  });

  // var menuOffset = $('#header').offset();
  // $(document).on('scroll', function() {
  //   var scrollTop = $(document).scrollTop();
  //   if (scrollTop > menuOffset.top) {
  //     $('#menu-nav').addClass('menu-white');
  //     $('#menu-nav').removeClass('menu-transparent');
  //   } else {
  //     $('#menu-nav').removeClass('menu-white');
  //     $('#menu-nav').addClass('menu-transparent');
  //   }
  // });
});