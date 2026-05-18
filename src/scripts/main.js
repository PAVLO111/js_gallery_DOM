'use strict';

// -1-

// const mainImage = document.querySelector('#largeImg');

// const listImg = document.querySelectorAll('.gallery__img');

// listImg.forEach((el) => {
//   el.addEventListener('click', (event) => {
//     event.preventDefault();

//     mainImage.src = el.src;
//   });
// });

// -2-

const mainImage = document.querySelector('#largeImg');

const list = document.querySelector('#thumbs');

list.addEventListener('click', (event) => {
  const link = event.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  event.preventDefault();

  const miniImg = link.querySelector('img');

  if (miniImg) {
    mainImage.src = miniImg.src;
  }
});
