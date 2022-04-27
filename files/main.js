// for resize textarea
document.addEventListener("DOMContentLoaded", function(event) {
  var tx = document.getElementsByTagName('textarea');

  for (var i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  }
});

// scrolling
document.addEventListener("DOMContentLoaded", function(event) {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
});

// contacts
$(function() {
  $('.thanks-wrapper').hide();

  $('.contactus-form__btn').click(function() {
    $('.contactus-form').hide();
    $('.thanks-wrapper').show();

    setTimeout(function() {
      $('.contactus-form').show();
      $('.contactus-form')[0].reset();
      $('.thanks-wrapper').hide();
    }, 2000);
  });
});

// modal
$(function() {
  $('.btn--price').click(function() {
    $('.modal--price').addClass('modal--active');
    $('.modal-overlay').addClass('modal-overlay--active');
    $('body').addClass('body--freeze');
  });

  $('.btn--booking').click(function() {
    $('.modal--booking').addClass('modal--active');
    $('.modal-overlay').addClass('modal-overlay--active');
    $('body').addClass('body--freeze');
  });

  $('.close-btn').click(function() {
    $('.modal').removeClass('modal--active');
    $('.modal-overlay').removeClass('modal-overlay--active');
    $('.modal-form')[0].reset();
    $('body').removeClass('body--freeze');
  });

  $('.modal__btn--close').click(function() {
    $('.modal').removeClass('modal--active');
    $('.modal-overlay').removeClass('modal-overlay--active');
    $('.modal-form')[0].reset();
    $('body').removeClass('body--freeze');
  });

  $('.modal-overlay').click(function() {
    $('.modal').removeClass('modal--active');
    $('.modal-overlay').removeClass('modal-overlay--active');
    $('.modal-form')[0].reset();
    $('body').removeClass('body--freeze');
  });

  $('.step--one .next-btn').click(function() {
    $('.step--one').removeClass('step--active');
    $('.step--two').addClass('step--active');
    $('.steps-list__item--one').addClass('steps-list__item--passed');
    $('.steps-list__item--two').addClass('steps-list__item--active');
  });

  $('.step--two .next-btn').click(function() {
    $('.step--two').removeClass('step--active');
    $('.step--three').addClass('step--active');
    $('.steps-list__item--two').addClass('steps-list__item--passed');
    $('.steps-list__item--three').addClass('steps-list__item--active');
  });

  $('.step--three .next-btn').click(function() {
    $('.modal--booking').removeClass('modal--active');
    $('.modal--success').addClass('modal--active');
    $('.modal-form')[0].reset();
  });

  $('.step--two .back-btn').click(function() {
    $('.step--two').removeClass('step--active');
    $('.step--one').addClass('step--active');
    $('.steps-list__item--two').removeClass('steps-list__item--active');
    $('.steps-list__item--one').addClass('steps-list__item--active');
    $('.steps-list__item--one').removeClass('steps-list__item--passed');
  });

  $('.step--three .back-btn').click(function() {
    $('.step--three').removeClass('step--active');
    $('.step--two').addClass('step--active');
    $('.steps-list__item--three').removeClass('steps-list__item--active');
    $('.steps-list__item--two').addClass('steps-list__item--active');
    $('.steps-list__item--two').removeClass('steps-list__item--passed');
  });
});

document.addEventListener("DOMContentLoaded", function(event) {
  let selectChoise = document.querySelectorAll('.select');

  selectChoise.forEach(item => {

    const qw = new Choices(item, {
      placeholder: false,
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
    });
  });
});

// header
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if(height > 1) {
    $('#header').addClass('header--move');
  } else {
    $('#header').removeClass('header--move');
  }
});

$(function() {
  $('.burger').click(function() {
    $('.header').toggleClass('header--active');
    $('body').toggleClass('body--freeze');
  });
});

$(function() {
  $('.header-nav__link').click(function() {
    $('.header').removeClass('header--active');
    $('body').removeClass('body--freeze');
  });
});

$(function() {
  $('.header-logo').click(function() {
    $('.header').removeClass('header--active');
    $('body').removeClass('body--freeze');
  });
});

// telmask
$(function() {
  $('input[type="tel"]').inputmask("+44 9999 999999", {
    showMaskOnHover: false,
  });
  $('.modal-form__input--date').inputmask("99.99.9999", {
    showMaskOnHover: false,
  });
  $('.modal-form__input--time').inputmask("99.99", {
    showMaskOnHover: false,
  });
});
