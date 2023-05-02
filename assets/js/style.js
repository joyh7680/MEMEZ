$(function(){
  // sc-cart
  $('#cart .tab-list li').click(function(e){
      e.preventDefault();
      const target = $(this).children().attr('href');
      $(this).addClass('on').siblings().removeClass('on');
      $(target).addClass('active').siblings().removeClass('active');
    })
    // btn-search
    $('.header .btn-search').click(function(e){
    e.preventDefault();
    $('.fixed-cart').addClass('off');
    })
    // sc-login
  $('#login .tab-list li').click(function(e){
      e.preventDefault();
      const target = $(this).children().attr('href');
      $(this).addClass('on').siblings().removeClass('on');
      $(target).addClass('active').siblings().removeClass('active');
    })
  //   goods tab-menu 
  $('.goods .category-item a').click(function(e){
      e.preventDefault();
      $('.goods .category-item a').removeClass('on')
      $(this).addClass('on')
  })
  // view 타입 이미지 변경 js 
  $('.view-list .btn-type').click(function(){
  $('.view-list button').removeClass('on')
  $(this).addClass('on')
  })
  // view 타입 list 변경 js 
  $('.view-list .btn-type').click(function(){
    type = $(this).data('type');
    $('.products-list').removeClass('list').removeClass('gallery').removeClass('tile')
    $('.products-list').addClass(type)
  })

  //   detail 
  var swiper = new Swiper(".detailSwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  //   detail -subMenu
  $('.sc-detail .menu-list li').click(function(e){
    e.preventDefault();
    const target = $(this).children().attr('href');
    $(this).addClass('on').siblings().removeClass('on');
    $(target).addClass('active').siblings().removeClass('active');
  })

  $('.sc-detail #guide dl dt.dt-toggle').click(function(e){
      e.preventDefault();
      $(this).toggleClass('on')
      $(this).next().toggleClass('hide')
  })

  $('.sc-detail #review .review-item').click(function(e){
    e.preventDefault();
    $(this).toggleClass('selected')
    $('.sc-detail #review .desc-box').toggleClass('active')
  })

  $('.sc-detail .btn-writing').click(function(e){
      e.preventDefault(); 
      alert('로그인하셔야 본 서비스를 이용하실 수 있습니다');
      window.open("../html/login.html", "_self");
      return false;
  })
})