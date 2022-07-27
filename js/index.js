(function($) {
  'use strict';

  var d = $(document);
  var w = $(window);

  w.on('scroll load', function() {
    var wh = $(this).height();
    var aimg = document.querySelector('.img-about');
    var aboutTxt = document.querySelector('.about-txt');
    var one = document.querySelector('.one');
    var two = document.querySelector('.two');
    var contactSection = document.querySelector('.contact-section');
    var footer = document.querySelector('.footer');

    if (inView(document.querySelector('#navi'), calculateViewOffset(10, wh))) {
      animateNav();
    }
    if (inView(aimg, calculateViewOffset(50, wh))) {
      aimg.classList.add('animate__fadeIn');
    }
    if (inView(aboutTxt, calculateViewOffset(65, wh))) {
      aboutTxt.classList.add('animate__fadeIn');
    }
    if (inView(one, calculateViewOffset(30, wh))) {
      one.classList.add('animate__fadeIn');
    }
    if (inView(two, calculateViewOffset(20, wh))) {
      two.classList.add('animate__fadeIn');
    }
    if (inView(contactSection, calculateViewOffset(10, wh))) {
      contactSection.classList.add('animate__fadeIn');
    }
    if (inView(footer, calculateViewOffset(7, wh))) {
      footer.classList.add('animate__fadeIn');
    }
  });

  function animateNav() {
    let n = $('#navi li');
    let t = 100;
    n.each(function() {
      t = t * 2;
      setTimeout(() => {
        $(this).addClass('animate__fadeIn');
      }, t);
    });
  }

  function calculateViewOffset(percentage, windowHeight) {
    return (percentage / 100) * windowHeight;
  }

})(jQuery);

function inView(element, offset) {
  if (!element) return false;
  if (1 !== element.nodeType) return false;

  var html = document.documentElement;
  var rect = element.getBoundingClientRect();
  offset = offset ?? 300;

  return !!rect &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.left <= html.clientWidth &&
    rect.top <= html.clientHeight - offset;
}