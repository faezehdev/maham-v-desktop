let OpBtn = document.querySelector('header .Toggles')
let ClBtn = document.querySelector('header .Close')
let Menu = document.querySelector('header')
let IS = false
ClBtn.addEventListener('click',()=>{
    console.log('close');
    
    if(!IS){
        Menu.classList.toggle('Open')
        gsap.to('header .Menu-link',{
        opacity:1,
        x:0,
        stagger:.3,
        })
        IS = true
    }
    else{
        IS = false
     
        gsap.to('header .Menu-link',{
           opacity:0,
           x:'100%',
           stagger:.1,
           })
        setTimeout(()=>{
           Menu.classList.toggle('Open')
        },1000)
    }
})
OpBtn.addEventListener('click',()=>{
    console.log('cll');
    
    if(!IS){
        Menu.classList.toggle('Open')
        gsap.to('header .Menu-link',{
        opacity:1,
        x:0,
        stagger:.1,
        })
        IS = true
    }
    else{
      
        IS = false
     
         gsap.to('header .Menu-link',{
            opacity:0,
            x:'100%',
            stagger:.1,
            })
         setTimeout(()=>{
            Menu.classList.toggle('Open')
         },1000)
       
    }
})