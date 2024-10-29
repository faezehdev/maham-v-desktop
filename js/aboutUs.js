$('.aboutUS').imagesLoaded( {

},  function() {
    $(document).ready(function() {
        // Enable Scroll

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
            slidesPerView: "auto",
             watchOverflow: true,
             watchSlidesProgress: true,
             watchSlidesVisibility: true,
             noSwiping: true,
             spaceBetween: 0,
             mousewheel: {
                 enabled: true,
                 sensitivity: 4,
             },
            direction: "vertical",
            autoplay: false,
            speed: 1000,
            grabCursor: false,
            mousewheelControl: true,
            mousewheel: true,
              on: {
                init: function (swiper) {
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
                           document.querySelector('header').classList.remove('dark')
   
                           break
                       }
                       case '1':{
                           console.log('Section',1);
                           document.querySelector('header').classList.add('dark')
   
                           break
                       }
                       case '2':{
                           console.log('Section',2);
                           document.querySelector('header').classList.remove('dark')
   
                           break
                       }
                   
                   }
                     },
                  reachEnd: function () {
                    let swiper = this;
                    setTimeout(function () {
                      document.querySelector('body').classList.remove('fixeSec')
                      swiperMin.mousewheel.disable();
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
                      // body.style.position="fixed"
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
                    trigger:'.aboutUS',
                    start:'top top',
                    end:'bottom bottom',
                    scrub:true,
                    onEnter: () =>onEnter(),
                    onEnterBack: () =>onEnterBack(),
                    onLeave: () => onLeave(),
                    onLeaveBack: () =>onLeaveBack(),
                }
                })
    })

})