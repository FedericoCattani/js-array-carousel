//DATA
const images = [
  "img/01.webp",
  "img/02.webp",  
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
]

const itemsContainer = document.querySelector('.items-container');
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');

const items = document.getElementsByClassName('item');
items[counterImage].classList.remove('item');


let counterImage = 0;


//LOGIC
for (i = 0; i < images.length; i++){

  const image = images[i];

  items.innerHTML +=`
  <img class= 'item' src="${image}">
  `
}

btnUp.addEventListener('click', function(){
  items[counterImage].classList.add('hide');

  counterImage++;

  items[counterImage].classList.remove('hide');

})

//RESULTS
