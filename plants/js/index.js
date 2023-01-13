console.log('Score: 100 /100 \n 1.Вёрстка валидная +10 \n 2.Вёрстка семантическая +20 \n 3.Вёрстка соответствует макету +48 \n 4.Требования к css + 12 \n 5.Интерактивность, реализуемая через css +20');
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

 hamb.addEventListener("click", hambHandler);

 function hambHandler(e) {
    e.preventDefault();
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
 