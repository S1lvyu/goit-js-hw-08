import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryItemsToHtml = galleryItems.map(
  el =>
    `<li class="gallery__item"><a class="gallery__link" href="${el.original}"><img class="gallery__image" src="${el.preview}" alt="${el.description}" title="${el.description}"/></a></li>`
);
gallery.insertAdjacentHTML('afterbegin', galleryItemsToHtml.join(''));
const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'title',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
