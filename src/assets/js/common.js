var main           = $('.main'),
    //Add block ('.add') elements
    btnLocation    = $('.main__btn'),
    add            = $('.add'),
    addCont        = $('.add__content'),

    // Common elements
    close          = $('.close'),
    locPerBtn      = $('.locations__btn'),
    tag            = $('.tag'),

    // Select options
    optionMore     = $('select option[name="Кол-во отзывов больше"]'),
    optionLess     = $('select option[name="Кол-во отзывов меньше"]'),

    recommended    = $('select option[name="Рекомендуют"]'),
    notRecommended = $('select option[name="Не рекомендуют"]'),
    highRate       = $('select option[name="Высокие оценки"]'),
    lowRate        = $('select option[name="Низкие оценки"]'),

    fiveStars      = $('select option[name="Рейтинг 5"]'),
    fourStars      = $('select option[name="Рейтинг 4"]'),
    threeStars     = $('select option[name="Рейтинг 3"]'),
    twoStars       = $('select option[name="Рейтинг 2"]'),
    star           = $('select option[name="Рейтинг 1"]');

jQuery(document).ready(function($) {
  setTimeout(function() {
    initLazy();
  });



  /*
    Swiper plugin Initialization and options
  */
  var reviewGallery = new Swiper ('.review__gallery', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 2,
    centerSlides: false,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    }
  });



  /*
    Styling Main block (.main)
  */
  if (!$('.main__col--first').length) {
    $('.main__col--second').addClass('main__col--ml');
  }

  main.css('background-image',function() {
    return 'url("'+ $(this).data('background') +'")';
  });



  /*
    Add classes to select options
    depending on their name attribute
  */
  if (optionMore) {
    optionMore.addClass('arrow-option-more');
  }
  if (optionLess) {
    optionLess.addClass('arrow-option-less');
  }
  if (recommended) {
    recommended.addClass('recommended-option');
  }
  if (notRecommended) {
    notRecommended.addClass('not-recommended-option');
  }
  if (highRate) {
    highRate.addClass('high-rate-option');
  }
  if (lowRate) {
    lowRate.addClass('low-rate-option');
  }
  if (fiveStars) {
    fiveStars.addClass('five-stars-option');
  }
  if (fourStars) {
    fourStars.addClass('four-stars-option');
  }
  if (threeStars) {
    threeStars.addClass('three-stars-option');
  }
  if (twoStars) {
    twoStars.addClass('two-stars-option');
  }
  if (star) {
    star.addClass('star-option');
  }




  /*
    Initialization styler plugin
    and styling select options
  */
  setTimeout(function() {
    $('select').styler();

    var optionMoreLi     = $('.jq-selectbox__dropdown li.arrow-option-more'),
        optionLessLi     = $('.jq-selectbox__dropdown li.arrow-option-less'),
        optionLi         = $('.jq-selectbox__dropdown li'),

        recommendedLi    = $('.jq-selectbox__dropdown li.recommended-option'),
        notRecommendedLi = $('.jq-selectbox__dropdown li.not-recommended-option'),
        highRateLi       = $('.jq-selectbox__dropdown li.high-rate-option'),
        lowRateLi        = $('.jq-selectbox__dropdown li.low-rate-option'),

        fiveStarsLi      = $('.jq-selectbox__dropdown li.five-stars-option'),
        fourStarsLi      = $('.jq-selectbox__dropdown li.four-stars-option'),
        threeStarsLi     = $('.jq-selectbox__dropdown li.three-stars-option'),
        twoStarsLi       = $('.jq-selectbox__dropdown li.two-stars-option'),
        starLi           = $('.jq-selectbox__dropdown li.star-option');


    // Functions to append icons in ('.jq-selectbox__select-text')
    appendIcons();
    $('.jq-selectbox__dropdown').each(function(index, el) {
      var selectedLi = $(el).find('.selected'),
          $li        = $(el);
      selectedLi.find('i').clone().appendTo($li.parent().parent().find('.jq-selectbox__select-text'));
      selectedLi.addClass('cloned')
    });

    // Copy-paste icons function when clicking on
    // ('.jq-selectbox__dropdown li')
    optionLi.click(function(event) {
      /* Act on the event */
      $li       = $(this);
      $ThisIcon = $li.find('i');

      if ($li.hasClass('cloned')) {
        return;
      } else {
        $ThisIcon.clone().appendTo($li.parent().parent().parent().find('.jq-selectbox__select-text'));
      }

      optionLi.removeClass('cloned');
      $li.addClass('cloned');
    });

    function appendIcons() {
      optionMoreLi.append('<i class="icon arrow-top-icon"></i>');
      optionLessLi.append('<i class="icon arrow-down-icon"></i>');

      recommendedLi.append('<i class="icon like-empty-icon"></i>');
      notRecommendedLi.append('<i class="icon dislike-empty-icon"></i>');
      highRateLi.append('<i class="icon arrow-top-icon"></i>');
      lowRateLi.append('<i class="icon arrow-down-icon"></i>');

      fiveStarsLi.append('<div class="icons"><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i></div>');

      fourStarsLi.append('<div class="icons"><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i></div>');

      threeStarsLi.append('<div class="icons"><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i></div>');

      twoStarsLi.append('<div class="icons"><i class="icon star-fill-icon"></i><i class="icon star-fill-icon"></i></div>');

      starLi.append('<div class="icons"><i class="icon star-fill-icon"></i></div>');
    }
  });



  /*
    Add block (.add) fade animation
  */
  btnLocation.on('click', function(e) {
    btnLocation.removeClass('active');
    if ($(this).hasClass('active')) {
      return;
    } else {
      if (add.hasClass('hidden')) {
        // show
        add.addClass('transition');
        add.innerWidth();
        add.removeClass('hidden');
        setTimeout(function() {
          add.addClass('add--active');
        }, 200);
        setTimeout(function() {
          addCont.addClass('rm-overflow');
        }, 600);
      }
    }
    $(this).addClass('active');
  });

  // Fade out animation for Add block (.add)
  // triggered on close-icon click
  close.on('click', function(event) {
    /* Act on the event */
    hideCont();
  });



  /*
    Add active classes to style elements
  */

  // Location link (.locations-btn)
  // Persons link (.persons-btn)
  locPerBtn.click(function(event) {
    /* Act on the event */
    locPerBtn.removeClass('active');
    $(this).addClass('active');
  });

  // Tags (.tag)
  tag.click(function(event) {
    /* Act on the event */
    tag.removeClass('active');
    $(this).addClass('active');
  });



  /*
    Stars rating on hover/click
  */
  $('.stars .star').hover(function() {
    $(this).addClass('to-rate');
    $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to-rate');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no-to-rate');
  }).mouseout(function() {
    $(this).parent().find('.star').removeClass('to-rate');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no-to-rate');
  }).click(function() {
    $(this).removeClass('to-rate').addClass('rated');
    $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to-rate').addClass('rated');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no-to-rate').removeClass('rated');
  });
});



/*
  Fade out animation for Add block (.add)
  triggered on body click
*/
$(document.body).on('click', function(el) {
  $target = $(el.target);

  if ($('.add.hidden').length) {
    return;
  } else {
    if ((!$target.closest(addCont).length) && (!$target.closest(btnLocation).length)) {
      hideCont();
    }
  }
});



// Hide function for Add block (.add)
function hideCont() {
  btnLocation.removeClass('active');
  setTimeout(function() {
    add.addClass('transition');
    add.addClass('hidden');
  }, 700);

  setTimeout(function() {
    add.removeClass('add--active');
  }, 10);

  addCont.removeClass('rm-overflow');

  add.on('transitionend', function() {
    add.removeClass('transition');
  });
}



/*
  Lazy load function
*/
function initLazy() {
  var
    lazyArr = [].slice.call(document.querySelectorAll('.lazy')),
    active = false,
    threshold = 200;

  var lazyLoad = function(e) {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyArr.forEach(function(lazyObj) {
          if ((lazyObj.getBoundingClientRect().top <= window.innerHeight + threshold && lazyObj.getBoundingClientRect().bottom >= -threshold) && getComputedStyle(lazyObj).display !== 'none') {

            if (lazyObj.dataset.src) {
              var
                img = new Image(),
                src = lazyObj.dataset.src;
              img.src = src;
              img.onload = function() {
                if (!!lazyObj.parent) {
                  lazyObj.parent.replaceChild(img, lazyObj);
                } else {
                  lazyObj.src = src;
                }
              }
              lazyObj.removeAttribute('data-src');
            }

            if (lazyObj.dataset.srcset) {
              lazyObj.srcset = lazyObj.dataset.srcset;
              lazyObj.removeAttribute('data-srcset');
            }

            lazyObj.classList.remove('lazy');
            lazyObj.classList.add('lazy-loaded');

            lazyArr = lazyArr.filter(function(obj) {
              return obj !== lazyObj;
            });

            if (lazyArr.length === 0) {
              document.removeEventListener('scroll', lazyLoad);
              window.removeEventListener('resize', lazyLoad);
              window.removeEventListener('orientationchange', lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  lazyLoad();
  document.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
  window.addEventListener('orientationchange', lazyLoad);
}
