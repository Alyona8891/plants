console.log('Score: 100 /100 \n 1. При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50 \n 2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50 \n 3. В разделе contacts реализован select с выбором городов +25');
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
   el.addEventListener("click", function (e) {
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

let arrCity = [{
    City: 'New York City',
    Phone: '+1 212 456 0002',
    ['Office adress']: '9 East 91st Street',
}, {
    City: 'Sherrill, NY',
    Phone: '+1 315 908 0004',
    ['Office adress']: '14 WEST Noyes BLVD',
}, {
    City: 'Yonkers, NY',
    Phone: '+1 914 678 0003',
    ['Office adress']: '511 Warburton Ave',
}, {
    City: 'Canandaigua, NY',
    Phone: '+1 585 393 0001',
    ['Office adress']: '151 Charlotte Street', 
}
]

const select = document.querySelector("#city");
const div = document.querySelector(".card__info-titles");
const nameSelect = document.querySelector(".contacts__name-select");
const options = document.querySelectorAll(".contacts__name-option");
const option = document.querySelector(".contacts__options");
let card = document.createElement ('div');
card.className = "contacts__city-card card";
let cardContainer = document.createElement ('div');
cardContainer.className = "card__container";
let cardBtn = document.createElement ('a');
cardBtn.className = "card__btn";
cardBtn.innerHTML = "Call us"
cardBtn.href = "";
let cardBlockInfo = document.createElement ('div');
cardBlockInfo.className = "card__block-info";
let cardInfoTitles = document.createElement ('div');
cardInfoTitles.className = "card__info-titles";
let cardInfoTexts = document.createElement ('div');
cardInfoTexts.className = "card__info-texts";

const arr = [];
for (i=0; i<options.length; i++) {
    arr.push(options[i].innerHTML);
}
nameSelect.addEventListener("click", selectHandler);
function selectHandler(e) {
    e.stopPropagation();
          nameSelect.classList.add("contacts__name-select_active");
          if(select.classList.contains("contacts__select")) {
            select.classList.remove("contacts__select");
            select.classList.add("contacts__select_active")
            card.remove();
          } else if (select.classList.contains("contacts__select_active")) {
            select.classList.remove("contacts__select_active");
            select.classList.add("contacts__select-choise");
            if(document.querySelector("#name").innerHTML === 'City') {
                card.remove();} else {select.after(card);}
          } else if (select.classList.contains("contacts__select-choise")) {
            select.classList.remove("contacts__select-choise");
            select.classList.add("contacts__select_active")
            card.remove();
          }
    
}
options.forEach((e, index) => e.addEventListener("click", function optionHandler(e) {
    select.classList.toggle("contacts__select_active");
    select.classList.toggle("contacts__select-choise");
    nameSelect.classList.add("contacts__name-select_choise");
    document.querySelector("#name").innerHTML = arr[index];
    select.after(card);
    card.prepend(cardContainer);
    cardContainer.prepend(cardBlockInfo, cardBtn);
    cardBlockInfo.prepend(cardInfoTitles, cardInfoTexts);  
    e.stopPropagation();
    if (cardInfoTitles.children.length < 3) {
            for(i=0; i<arrCity.length; i++) {
            const j = arrCity[i];
            for(let key in j) {
                if(j[key] === document.querySelector('.contacts__name-select_choise').innerHTML) {
                     for(let k in j) {
                    let newDiv = document.createElement ('div');
                    let newText = document.createElement ('div');
                    newDiv.innerHTML = `${k}:`;
                    newText.innerHTML = j[k];
                    cardInfoTitles.append(newDiv);
                    cardInfoTexts.append(newText);
                    let newArr = Object.values(j) 
                    let p = '';
                    for(l=0; l<newArr[1].length; l++) {
                if (+newArr[1][l] >= 0 && newArr[1][l] !== ' ') {
                        p = p + `${newArr[1][l]}`;
                    }
                cardBtn.href = `tel:${p}`;
                    }
                } 
            }
            }
    } 
} else {
    let d = document.querySelector('.card__info-texts').children;
    for(i=0; i<arrCity.length; i++) {
        const j = arrCity[i];
        for(let key in j) {
            if(j[key] === document.querySelector('.contacts__name-select_choise').innerHTML) {
                let newArr = Object.values(j)
                for (k=0; k<newArr.length; k++) {
                    d[k].innerHTML = newArr[k];
                }
                let p = '';
                for(l=0; l<newArr[1].length; l++) {
                if (+newArr[1][l] >= 0 && newArr[1][l] !== ' ') {
                    p = p + `${newArr[1][l]}`;
                }
                cardBtn.href = `tel:+${p}`;
            }
        }
    }
}
}
if (window.innerWidth < 400) {
    let parent = document.querySelector('.contacts__container');
    let child = document.querySelector('.contacts__image ');
    if(parent.contains(child) ) {
        let image = document.querySelector('.contacts__image');
        image.className = 'mobile';
    }
}
}
)
)