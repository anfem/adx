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
  });
