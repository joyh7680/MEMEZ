$(function(){
    // header gnb 
    lastScroll = 0;
    $(window).scroll(function(){
        curr = $(window).scrollTop();
        if(curr > lastScroll){ 
            $('.header, .fixed-menu, .group-tit, .group-tit.goods, .goods .group-sub-menu').addClass('hide');
            $('.group-sideBtn').addClass('down');
        }else { 
            $('.header, .fixed-menu, .group-tit, .group-tit.goods, .goods .group-sub-menu').removeClass('hide');
            $('.group-sideBtn').removeClass('down');
        }
        // subMenu 
        if(curr > 700 ){ 
            $('.sc-detail .subMenu-area').addClass('fixed');
            $('.sc-detail .group-tit.detail-tit').addClass('hide02');
        }else { 
            $('.sc-detail .subMenu-area').removeClass('fixed');
            $('.sc-detail .group-tit.detail-tit').removeClass('hide02');
        }
        if (curr == 0){ 
            $('.group-sideBtn').addClass('hide');
        }else { 
            $('.group-sideBtn').removeClass('hide');
        }
        lastScroll = curr
    })
    $(window).trigger('scroll'); 

    // lang-select
    $('.header .lang-select').click(function(e){
        e.preventDefault();
        $('.header .arrow-lang').toggleClass('on')
        $('.header .group-left .lang-list').toggleClass('on')
    })
   
    // sc-search
    $('.header .btn-search').click(function(e){
        e.preventDefault();
        $('.sc-search').addClass('on');
        $('.fixed-menu').addClass('hide');
        $('body').addClass('hidden');
    })
    $('.sc-search .group-search .btn-close').click(function(e){
        e.preventDefault();
        $('.sc-search').removeClass('on');
        $('.fixed-menu').removeClass('hide');
        $('body').removeClass('hidden');
    })
    $('#searchForm').submit(function(){
        keyword = $(this).find('.input-text');
        if (!keyword.val()) {
            alert('검색어를 입력하세요');
            keyword.focus();
            return false; 
        }
    })

    // footer - noticeSwiper
    var swiper = new Swiper(".noticeSwiper", {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        direction: getDirection(),
        on: {
            resize: function () {
              swiper.changeDirection(getDirection());
            },
          },
      });
      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
        return direction;
      }

      // footer company info click event 
      let subToggle=true;
      $(".footer .group-info .tit").click(function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        if(subToggle){
          $(".footer .group-info .desc-area").slideUp(1000);
        }else{
          $(".footer .group-info .desc-area").slideDown(1000);
        }
        subToggle=!subToggle;
      });

    //   accodian 
      $('.sc-accodian .lang-wrap .btn-lang').click(function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        $('.sc-accodian .lang-list').toggleClass('on')
      })

      $('.sc-accodian .dep').click(function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        $(this).siblings().toggleClass('active');
      })

      $('.fixed-menu .btn-menu').click(function(e){
        e.preventDefault();
        $('.sc-accodian').addClass('on');
      })

      $('.sc-accodian .group-top .btn-close').click(function(e){
        e.preventDefault();
        $('.sc-accodian').removeClass('on');
      })

      // top button 
      $('.group-sideBtn .btn-top').click(function(){
        window.scrollTo({top:0,behavior:"smooth"})
      })

      // btn-qna
      $('.group-sideBtn .btn-qna').click(function(e){
        e.preventDefault();
        $('.sc-inquiry').addClass('on');
        $('.sc-inquiry > *').addClass('on');
      })

      $('.sc-inquiry #btn-close').click(function(e){
        e.preventDefault();
        $('.sc-inquiry').removeClass('on');
        $('.sc-inquiry > *').removeClass('on');
      })

});