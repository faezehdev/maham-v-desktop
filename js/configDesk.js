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

let map1 = document.querySelector('.Map_1')
let xLat = map1.getAttribute('data-x')
let yLat = map1.getAttribute('data-y')
let re1 = yLat.replace('<p>','')
yLat = re1.replace('</p>','')
let map_1 = L.map('Map_1',{
    center:[yLat,xLat]
    ,zoom:10
})
let tiles= new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
minZoom:'10'
}).addTo(map_1);
var customIcon = L.icon({
  iconUrl: '../images/location.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
  });
  var marker1 = L.marker([yLat,xLat],{ icon: customIcon }).addTo(map_1);
