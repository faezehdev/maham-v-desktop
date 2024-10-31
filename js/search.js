// Enable Scroll
const lenis = new Lenis()
function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
  // SEARCH
  let searchIcon = document.querySelector('.Search-container .InputBoxes .searchIcon')
  searchIcon.addEventListener('click',()=>{
    console.log('clicked');
    let input = document.querySelector('input#search2')
    if(input.value == ''){
      return
       }
     else{
         console.log('val',input.value);
         var url = `/loadSearch.inc?q=${input.value}`;
         $(".loaded").load(url);}
  
  })
  let inputt = document.querySelector('input#search2')
  inputt.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      if(inputt.value != ''){
        event.preventDefault();
      console.log('clicked');
  console.log('val',inputt );
  console.log('val',inputt.value);
    window.location.href = `/search.bc?q=${inputt.value}`
  setTimeout(() => {
   
  }, 1000);
      }
  
  
    }
  });