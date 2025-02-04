setTimeout(() => {
  let colors = document.querySelectorAll(".colorBadge");
  colors.forEach((element) => {
    let dataColor = element.getAttribute("data-color");
    console.log("data", dataColor);
    switch (dataColor) {
      case "سیاه":
        element.style.background = "black";
        break;
      case "قرمز":
        element.style.background = "red";
        break;
      case "صورتی":
        element.style.background = "pink";
        break;
      case "زرد":
        element.style.background = "yellow";
        break;
      case "نارنجی":
        element.style.background = "#ff6000";
        break;
      case "سبز":
        element.style.background = "green";
        break;
      case "ابی":
        element.style.background = "blue";
        break;
      case "بنفش":
        element.style.background = "purple";
        break;
      case "زرشکی":
        element.style.background = "#770000";
        break;
      case "سرمه ای":
        element.style.background = "#020057";
        break;
      case "نقره":
        element.style.background = "silver";
        break;
      case "طلایی":
        element.style.background = "#d7b500";
        break;
      case "سفید(رنگ)":
        element.style.background = "white";
        break;
      case "قهوه ای(رنگ)":
        element.style.background = "#6b3823";
        break;
      case "خاکستری(گروه رنگی)":
        element.style.background = "#575757";
        break;

      default:
        console.log("def");
        break;
    }
  });
}, 200);

document.querySelector(".btn.bg-HarvestGold400").addEventListener("click", function (params) {
  console.log("click");
  lenis.destroy();
})

document.querySelector(".close.opacity-100").addEventListener("click",function (params) {
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
})