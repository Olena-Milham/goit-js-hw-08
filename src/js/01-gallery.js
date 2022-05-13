// import galleryItemTml from '../templates/gallery-item.hbs';
import galleryItemsTml from '../templates/gallery-items.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
// const markup = galleryItems.map(galleryItemTml).join('');

const markup = createItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', markup);

function createItemsMarkup(galleryItems) {
  return galleryItemsTml(galleryItems);
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);

//     item => `<li class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </li>`,
