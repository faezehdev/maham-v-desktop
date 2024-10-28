$('.Home').imagesLoaded( {

},  function() {
    $(document).ready(function() {
        const interleaveOffset = 0.5;
        // main slider
        let swiperMin = new Swiper('.mainSwiper', {
            loop: false,
            direction: "vertical",
            autoplay: false,
            speed: 1000,
            grabCursor: false,
            watchSlidesProgress: true,
            mousewheelControl: true,
            mousewheel: true,
              pagination: {
                el: '.mainSwiper > .swiper-pagination',
                clickable: true,
                type: 'bullets',
                renderBullet: function (index, className) {
                    console.log(className);
                return '<span class="' + className + '">'  +'<span class="inner"></span>'+ '</span>';
            
                }
              },
              on: {
                init:function(){
                 let swiper= this
                 let slidess = swiper.slides
                 console.log(slidess);
                 for(let g= 0 ; g < slidess.length ; g++){
                    slidess[g].setAttribute('data-index',g)
                 }
                },
                slideChange: function (e) {
                    let swiper = this;
                    for(let r= 0 ; r< swiper.slides.length ; r++){
                        let bullet = document.querySelectorAll(' .Home .swiper-Container > .swiper-pagination .swiper-pagination-bullet')
                        bullet[r].innerHTML = `<span class="inner"></span>`
                    }      
                 let active =  e.slides[swiper.activeIndex]
                 let id =active.getAttribute('data-index')
                 console.log('active Section',id);
                 switch(id){
                    case '0':{
                        console.log('Section',0);
                        // document.querySelector('header').classList.remove('dark')
                        // document.querySelector('header').classList.remove('darkLogo')

                        break
                    }
                    case '1':{
                        console.log('Section',1);
                        // document.querySelector('header').classList.add('dark')
                        // document.querySelector('header').classList.remove('darkLogo')

                        break
                    }
                    case '2':{
                        console.log('Section',2);
                        // document.querySelector('header').classList.add('dark')
                        // document.querySelector('header').classList.add('darkLogo')

                        break
                    }
                    case '3':{
                        console.log('Section',3);
                        // document.querySelector('header').classList.remove('dark')
                        // document.querySelector('header').classList.remove('darkLogo')

                        break
                    }
                    case '4':{
                        console.log('Section',4);
                        // document.querySelector('header').classList.remove('dark')
                        // document.querySelector('header').classList.remove('darkLogo')

                        break
                    }
                }
                  },
              }
            });
          // banner slider
          let SwiperBanner= new Swiper ('.swiper-Banners', {
            slidesPerView: 1,
            spaceBetween: 0,
            effect:'slide' ,
            mousewheelControl: true,
            mousewheel: true,
           speed:1000,
           autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
           navigation: {
            nextEl: ".swiper-Banners .swiper-button-next",
            prevEl: ".swiper-Banners .swiper-button-prev",
          },
            }) 
   
  
 
    })

})