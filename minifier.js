! function (a) {
  "use strict";
  a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var e = a(this.hash);
      if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({
        scrollTop: e.offset().top - 57
      }, 1e3, "easeInOutExpo"), !1
    }
  }), a(".js-scroll-trigger").click(function () {
    a(".navbar-collapse").collapse("hide")
  }), a("body").scrollspy({
    target: "#mainNav",
    offset: 57
  });
  var e = function () {
    a("#mainNav").offset().top > 100 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink")
  };
  e(), a(window).scroll(e), window.sr = ScrollReveal(), sr.reveal(".sr-icons", {
    duration: 600,
    scale: .3,
    distance: "0px"
  }, 200), sr.reveal(".sr-button", {
    duration: 1e3,
    delay: 200
  }), sr.reveal(".sr-contact", {
    duration: 600,
    scale: .3,
    distance: "0px"
  }, 300), a(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: !0,
      navigateByImgClick: !0,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  })
}(jQuery);