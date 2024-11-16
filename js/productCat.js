var elements = document.querySelectorAll(".catItem");
var gallery = document.querySelector(".gridContainer");

var groupSize = 10;
var groupCount = Math.ceil(elements.length / groupSize);

for (var i = 0; i < groupCount; i++) {
  var startIndex = i * groupSize;
  var endIndex = startIndex + groupSize;
  var groupElements = Array.from(elements).slice(startIndex, endIndex);
  var groupDiv = document.createElement("div");
  groupDiv.className = "RowContainer";
  let groupInnerDiv1 = document.createElement("div");
  groupInnerDiv1.className = "innerRow1";
  let groupInnerDiv2 = document.createElement("div");
  groupInnerDiv2.className = "innerRow2";
  let inner1 = document.createElement("div");
  inner1.className = "inner1";
  let inner2 = document.createElement("div");
  inner2.className = "inner2";
  let inner3 = document.createElement("div");
  inner3.className = "inner3";
  let inner4 = document.createElement("div");
  inner4.className = "inner4";
  groupElements.forEach(function (element, index) {
    groupDiv.appendChild(element);
    if (index > 3) {
      groupDiv.appendChild(groupInnerDiv2);
      if (index >6) {
        groupInnerDiv2.appendChild(inner3);
        inner3.appendChild(element);
      } else {
        groupInnerDiv2.appendChild(inner4);
        inner4.appendChild(element);
      }
    } else {
        groupDiv.appendChild(groupInnerDiv1);
        
        if (index>0) {
            groupInnerDiv1.appendChild(inner2);
            console.log(element);
        inner2.appendChild(element);
        
    }
    else{
           groupInnerDiv1.appendChild(inner1);
           console.log(element);
       inner1.appendChild(element);

       }


    }
  });

  gallery.appendChild(groupDiv);
}
