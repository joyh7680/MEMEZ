$(function(){
  // mainSwiper
    var swiper = new Swiper(".mainSwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      
    // productsSwiper
    var swiper = new Swiper(".productsSwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // reviewsSwiper
    var swiper = new Swiper(".reviewsSwiper", {
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

      //btn-wish
    $('.btn-wish').click(function(e){
      e.preventDefault(); 
      alert('로그인하셔야 본 서비스를 이용하실 수 있습니다');
      window.open("./html/login.html", "_self");
      return false;
    });

    // review
    fetch('./assets/data/reviewData.json')
    .then((response) => response.json())
    .then((json) => {
        data = json.items; 

        let html = '';

        data.forEach(element => { 
          html+=`<div class="swiper-slide">
                    <a href="" class="img-wrap">
                        <img src="${element.snippets.thumbnails.url}" alt="${element.snippets.product.title}">
                    </a>
                    <div class="group-txt">
                        <div class="review-area">
                            <div class="star-wrap">
                                <span class="star">
                                    <span class="star-on" style="width:${element.snippets.review.number/5*100}%;">
                                        <span class="blind">${element.snippets.review.desc}</span>
                                    </span>
                                </span>
                            </div>
                            <p>${element.snippets.title}</p>
                            <a href="">${element.snippets.desc}</a>
                        </div>
                        <div class="goods-area">
                            <div class="info-area">
                                <a href=""  class="img-box">
                                    <img src="${element.snippets.product.thumbnails}"alt="${element.snippets.product.title}">
                                </a>
                                <a href="" class="info-box">
                                    <p>${element.snippets.product.title}</p>
                                    <div class="price">
                                        <strong class="per">${element.snippets.product.price.per}</strong>
                                        <em class="sale">${element.snippets.product.price.sale}</em>
                                        <span class="origin">${element.snippets.product.price.origin}</span>
                                    </div>
                                </a>
                            </div>
                            <div class="wish-box">
                                <span class="blind">찜하기</span>
                                <button type="button" class="btn-wish"></button>
                                <span class="wish-caunt">${element.snippets.scrap}</span>
                            </div> 
                        </div>
                    </div>
                </div>`
        });

        $('#reviewList').html(html);

    })
})