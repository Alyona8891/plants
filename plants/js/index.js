console.log('Score: 75 /75 \n 1.Вёрстка соответствует макету. Ширина экрана 768px +24 \n 2.Вёрстка соответствует макету. Ширина экрана 380px +24 \n 3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n 4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22');
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

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
