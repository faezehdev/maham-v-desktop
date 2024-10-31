$('.Home').imagesLoaded( {

},  function() {
    $(document).ready(function() {
        // Enable Scroll
        gsap.to(".Loading-Container svg", {
          opacity: 0,
          delay: 1,
          ease: "expo.in",
        });
        gsap.to(".Loading-Container", {
          scale: 0,
          delay: 1,
          ease: "expo.in",
        });
  const lenis = new Lenis()


  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
      setTimeout(()=>{
        lenis.scrollTo(0,0);
      
      },100)
      setTimeout(()=>{
      
        lenis.stop();
      },1001)
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
                  reachEnd: function () {
                    let swiper = this;
                    setTimeout(function () {
                      document.querySelector('body').classList.remove('fixeSec')
                      swiper.params.touchReleaseOnEdges = true;
                      swiper.params.mousewheel.releaseOnEdges = true;
                      lenis.start();
                    console.log("end"); 
                  }, 500);
                  },
                  reachBeginning: function () {
                    let swiper = this;
                    setTimeout(function () {
                      console.log("begin");
                      swiperMin.mousewheel.enable();
                      document.querySelector('body').classList.add('fixeSec')
                      lenis.scrollTo('.Section-1');
                        swiper.params.touchReleaseOnEdges = true;
                        swiper.params.mousewheel.releaseOnEdges = true;
                         lenis.stop();
                    }, 500);
                  },
              }
            });
            onEnter=()=>{
              console.log('onEnter');
              swiperMin.mousewheel.disable();
              }
              onEnterBack=()=>{
                  console.log('onEnterBack');
                  
                  }
              onLeave=()=>{
              console.log('onLeave');
                      
               }
               onLeaveBack=()=>{
               console.log('onLeaveBack');
               setTimeout(()=> {
                  swiperMin.mousewheel.enable();
                  swiperMin.params.touchReleaseOnEdges = true
                  swiperMin.params.mousewheel.releaseOnEdges = true;
                  document.querySelector('body').classList.add('fixeSec')
                  lenis.stop();
              },100);           
               }
               gsap.to('.swiper-container',{
                scrollTrigger:{
                    trigger:'.Home',
                    start:'top top',
                    end:'bottom bottom',
                    scrub:true,
                    onEnter: () =>onEnter(),
                    onEnterBack: () =>onEnterBack(),
                    onLeave: () => onLeave(),
                    onLeaveBack: () =>onLeaveBack(),
                }
                })
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