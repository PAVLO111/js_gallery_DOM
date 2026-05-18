'use strict';

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
    // mainImage.src = miniImg.src;
    mainImage.src = link.getAttribute('href');
  }
});
