$(window).on('load', function() {
  $('img').cardify();

  // /* EFECTO DE GIRAR CERTIFICADOS AL PASAR MOUSE */
  // $('.fa-certificate').on('mouseover', function () {
  //   $(this).transition({
  //     rotate: '10deg'
  //   });
  // });

  // /* EFECTO DE GIRAR CERTIFICADOS A SU POSICIÓN DE ORGINE AL SACAR EL MOUSE */
  // $('.fa-certificate').on('mouseleave', function () {
  //   $(this).transition({
  //     rotate: '-10deg'
  //   });
  // });

  var controller = new ScrollMagic();
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#about-me'
  })
    .setClassToggle('#about-me', 'fade-in')
    .addTo(controller);
});