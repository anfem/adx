  $(document).ready(function () {
    let isOpen = false;

    $('#MobileBtn').click(function () {
      isOpen = !isOpen;

      // 모바일 메뉴 토글
      $('#MobileNav').slideToggle(300);

      // 메뉴 아이콘 토글
      if (isOpen) {
        $('.menu_ico').hide();
        $('.close_ico').show();

        // 배경 변경
        $('#SampleNav').css('background', '#fff');

        // 로고 전환
        $('#HomeBtn > .nomal_logo').hide();
        $('#HomeBtn > .active_logo').show();
      } else {
        $('.menu_ico').show();
        $('.close_ico').hide();

        $('#SampleNav').css('background', '');

        $('#HomeBtn > .nomal_logo').show();
        $('#HomeBtn > .active_logo').hide();
      }
    });



   $(document).ready(function () {
        let animated = false;

        function isScrolledIntoView(elem) {
          const docTop = $(window).scrollTop();
          const docBottom = docTop + $(window).height();
          const elemTop = $(elem).offset().top;
          const elemBottom = elemTop + $(elem).outerHeight();
          return elemTop < docBottom && elemBottom > docTop;
        }

        function animateAllCountups() {
          $('.countup[data-count]').each(function () {
            const $el = $(this);
            const countTo = parseFloat($el.attr('data-count'));
            const suffix = $el.attr('data-suffix') || '';
            const isDecimal = countTo % 1 !== 0;

            $({ val: 0 }).animate(
              { val: countTo },
              {
                duration: 2000,
                easing: 'swing',
                step: function () {
                  const val = isDecimal
                    ? this.val.toFixed(1)
                    : Math.floor(this.val).toLocaleString();
                  $el.text(val + suffix);
                },
                complete: function () {
                  const val = isDecimal
                    ? countTo.toFixed(1)
                    : countTo.toLocaleString();
                  $el.text(val + suffix);
                }
              }
            );
          });
        }

        function triggerCountupsWhenVisible() {
          if (animated) return;

          // 원하는 섹션이 보일 때만 실행
          const $targetSection = $('.about_section2');
          if ($targetSection.length && isScrolledIntoView($targetSection)) {
            animateAllCountups();
            animated = true;
          }
        }

        // 스크롤 시 실행
        $(window).on('scroll', triggerCountupsWhenVisible);

        // 초기 진입 시도
        triggerCountupsWhenVisible();
      });
  });
