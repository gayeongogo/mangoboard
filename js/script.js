$('.app-btn').on({click:function(){
    $('.bar').toggleClass('add');
    $('.mobile-nav').stop().slideToggle(500);
}});


//상단 News
const newsBanner=$('.news-box-wrap .news-item');
let current=0;
let newsInterval;

newsSlide();
function newsSlide(){
    newsInterval=setInterval(function(){
        let prev=newsBanner.eq(current);
        newsMove(prev, 0, '-100%')
        current++;
        if(current==newsBanner.size()) current=0;
        let next=newsBanner.eq(current);
        newsMove(next, '100%', 0)
    },2000);
};
function newsMove(tg, start, end){
    tg.css("top", start).stop().animate({top:end},500);
}

$('.news-box-wrap').hover(function(){
    clearInterval(newsInterval);
}, function(){
    newsSlide();
});


//template btn
const bottomRadius=$('.btn li');
const line=$('.template-line .title li');
bottomRadius.click(function(){
    bottomRadius.removeClass('on')   //일단 다 활성화 안함
    $(this).addClass('on');          //선택된 것만 활성화
    let lines=$(this).index();       //클릭한게 몇번째 순서인지 확인 
    // console.log(lines);
    line.removeClass('on');          //일단 다 활성화 안함
    line.eq(lines).addClass('on')    //선택된 것만 활성화
});


//banner slide
const slideBanner=$('.bannerArea > .area'); //이게 움직임(대상)
const leftBtn=$('.bLeftBtn'); //왼쪽가는
const slideList=$('.bannerArea > .area > li');
const rightBtn=$('.bRightBtn'); //오른쪽가는
const slideWidth=slideList.width();
let setIntervalId //마우스 올리면 멈추기 위한 clearInterval 쓰기 위해 필요

bannerSlide(); //함수는 불러줘야 실행됨
function bannerSlide(){
    // setIntervalId=setInterval(() => {}); //아래랑 똑같은거, allow function
    setIntervalId=setInterval(function(){
        slideBanner.stop().animate({left:-(slideWidth+15)},500,function(){ //0.5초간
            $('.bannerArea > .area > li:First').insertAfter($('.bannerArea > .area > li:last')) //움직인 첫번째를 뒤로보내기
            slideBanner.css({left: 0}); //다시 left 0으로 붙여주어 자연스럽게 움직이게 만듦
        })
    },2000); //2초마다 움직임
};

//마우스 올리면 슬라이드 멈춤
//마우스 빠져나오면 슬라이드 움직임
leftBtn.hover(function(){
    clearInterval(setIntervalId);
},function(){
    bannerSlide();
})

rightBtn.hover(function(){
    clearInterval(setIntervalId);
},function(){
    bannerSlide();
})

slideBanner.hover(function(){
    clearInterval(setIntervalId);
},function(){
    bannerSlide();
})

//오른쪽 버튼을 누르면 오른쪽으로 한 칸 이동
rightBtn.click(function(){
    slideBanner.stop().animate({left:-(slideWidth+15)},500,function(){ //0.5초간
        $('.bannerArea > .area > li:First').insertAfter($('.bannerArea > .area > li:last')) //움직인 첫번째를 뒤로보내기
        slideBanner.css({left: 0}); //다시 left 0으로 붙여주어 자연스럽게 움직이게 만듦
    })
});

//왼쪽 버튼을 누르면 왼쪽으로 한 칸 이동 *주의
leftBtn.click(function(){
    $('.bannerArea > .area > li:last').insertBefore($('.bannerArea > .area > li:first')) //먼저 맨 뒤에 있는 애를 처음으로 가져오기
    slideBanner.css({left:-(slideWidth+15)}).stop().animate({left:0},500)
});

// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    autoplay: {
       delay: 3000,
    },
    breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        720: {
            slidesPerView: 4,
            spaceBetween: 20
          },
    }
});

$('.bxslider').bxSlider({
    mode: 'fade', //이미지 교체 방식
    // auto: true //자동움직임
});