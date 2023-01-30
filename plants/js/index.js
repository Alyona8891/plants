console.log('Score: 75 /75 \n 1.Вёрстка соответствует макету. Ширина экрана 768px +24 \n 2.Вёрстка соответствует макету. Ширина экрана 380px +24 \n 3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n 4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22');
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;
const price = document.querySelectorAll(".block-choice__button");
const line = document.querySelectorAll(".block-choice__line");
const order = document.querySelectorAll(".block-choice__btn");
const garden = document.querySelectorAll(".garden");
const planting = document.querySelectorAll(".planting");
const lawn = document.querySelectorAll(".lawn");
const gardenBtn = document.querySelector("#garden");
const plantingBtn = document.querySelector("#planting");
const lawnBtn = document.querySelector("#lawn");
const buttons = document.querySelectorAll(".services__button");
const figures = document.querySelectorAll(".services__project-block");
const forms = document.querySelectorAll(".form");

hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
    
 }
 function renderPopup() {
    popup.appendChild(menu);
 }
 menu.addEventListener("click", myFunc);
 function myFunc(e) {
   popup.classList.toggle("open")
   body.classList.toggle("noscroll");
   hamb.classList.toggle("active");
 }
document.onclick = function (e) {
   if (e.className != 'active') {
      popup.classList.remove("open");
      hamb.classList.remove("active");
      body.classList.remove("noscroll");
   }
}
price.forEach(function (el, i) {
   el.addEventListener("click", function () {
       price.forEach ((el, index) => (index !== i) ? el.classList.remove("block-choice__button_open") : '');
       el.classList.toggle("block-choice__button_open");
       line.forEach((el, i) => (price[i].classList.contains("block-choice__button_open")) ? el.classList.add("block-choice__line_open") : el.classList.remove("block-choice__line_open"));
   })
})
order.forEach(function (el, i) {
   el.addEventListener("click", function (event) {
       event.stopPropagation();
   })
})
forms.forEach(function (el) {
   el.addEventListener("click", function (e) {
     e.preventDefault();
     e.stopPropagation();
   })
})
buttons.forEach(function (el, index) {
   
   el.addEventListener("click", function () {
       let num = 1;
       for(i=0; i<3; i++) {
           if(buttons[i].classList.contains("button__active")) {
               num += 1;
           }
       } 
       if(el.classList.contains("button__active")) {
           el.classList.remove("button__active");   
       } else {
           
           
           if(num < 3) {
               el.classList.add("button__active");
           }
           figures.forEach((el) => el.classList.add("blur"));
       }
       if (gardenBtn.classList.contains("button__active")) {
           garden.forEach((el) => el.classList.remove("blur"));
       } else { garden.forEach((el) => el.classList.add("blur"));}
       if (plantingBtn.classList.contains("button__active")) {
           planting.forEach((el) => el.classList.remove("blur"));
       } else { planting.forEach((el) => el.classList.add("blur"));}
       if (lawnBtn.classList.contains("button__active")) {
           lawn.forEach((el) => el.classList.remove("blur"));
       } else { lawn.forEach((el) => el.classList.add("blur"));}
       if (!gardenBtn.classList.contains("button__active") && !plantingBtn.classList.contains("button__active") && !lawnBtn.classList.contains("button__active")) {
           figures.forEach((el) => el.classList.remove("blur"));
       }
       
       })
       
       
})
