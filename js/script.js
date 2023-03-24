//DATA

//l'errore è qua.
const images = [
  'img/01.webp',
  'img/02.webp',  
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]

const itemsContainer = document.querySelectorAll('.items-container');
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');

let counterImage = 0;
//l'errore e pure qua.
const items = document.getElementsByClassName('item');
items[counterImage].classList.remove('hide');




//LOGIC
for (i = 0; i < images.length; i++){

  const image = images[i];

  itemsContainer.innerHTML +=`
  <img class= 'item hide' src="${image}">
  `
}

btnUp.addEventListener('click', function(){
  items[counterImage].classList.add('hide');

  counterImage++;

  items[counterImage].classList.remove('hide');
  console.log(btnUp);
})

btnDown.addEventListener('click', function(){
  items[counterImage].classList.add('hide');

  counterImage--;

  items[counterImage].classList.remove('hide');
  console.log(btnUp);
})

//RESULTS
