'use strict';

(function ($) {
  $.fn.cardify = function () {
    /* FUNCIÓN PARA ASIGNAR FIGURE A IMG COMO PADRE Y AGREGAR FIGCAPTION */
    var container = $('.container-img');
    container.find('img').each(function () {
      /* debugger;*/
      var elem = $(this);
      var text = $(this).attr('alt');
      console.log(text);
      elem.wrap('<figure></figure>').parent();
      elem.parent().append('<figcaption></figcaption>');
      elem.next().text(text);

      // CLASES  EN FIGCAPTION
      elem.next().css({
        'opacity': '0',
        'text-align': 'center',
        'position': 'absolute',
        'font-size': '20px',
        'vertical-align': 'middle',
        // 'margin-top': '-30%',
        // 'margin-left': '35%',
        // 'tranform': 'translate(60, -50px)'
      });

      // CONDICION PARA EVENTO CON EL MOUSE

      if (EventTarget == elem || elem.parent() || elem.next) {
        /* FUNCIÓN PARA ESCONDER IMAGEN Y MOSTRAR FIGCAPTION AL PASAR MOUSE*/
        elem.mouseover(function () {
          elem.parent().addClass('figure-cardify');
          elem.css('opacity', '0');
          elem.next().css({
            'opacity': '1',
          });
        });

        /* FUNCIÓN PARA MOSTRAR IMAGEN Y ESCONDER FIGCAPTION AL PASAR MOUSE*/
        elem.mouseleave(function () {
          elem.css('opacity', '1');
          elem.next().css('opacity', '0');
        });
      }
    });
    return this;
  };
})(jQuery);