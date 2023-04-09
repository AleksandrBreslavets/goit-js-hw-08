// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const list = document.querySelector(".gallery");
let markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`).join("");
list.innerHTML = markup;
var imageLightBox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
 });
console.log(galleryItems);
console.log(galleryItems);
