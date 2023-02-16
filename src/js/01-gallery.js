// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector(".gallery");

const imageMarkup = createImagesGalleryMarkup(galleryItems);

galleryContainer.innerHTML = imageMarkup;

// galleryContainer.addEventListener("click", onGalleryContainerClick);

function createImagesGalleryMarkup(gallery) {
 return gallery
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
       <a class="gallery__link" href="${original}">
          <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}" />
        </a>
    </div> `;
    }).join('');

};

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

// console.log(createImagesGalleryMarkup(galleryItems));

// function onGalleryContainerClick(evt) {
// 	evt.preventDefault();
// 	if (!evt.target.classList.contains("gallery__image")) {

// 		return
// 	}

// 	const instance = basicLightbox.create(`
// <img src="${evt.target.dataset.source}" width="800" height="600">`, 
//   {
//   onShow: () => {
//    document.addEventListener('keydown', handelKeydown)
//   },
//   onClose: () => {
//    document.removeEventListener('keydown', handelKeydown)
//     }
//   }
//   )
  
//   instance.show()


//   function handelKeydown(evt) {
//     if (evt.key === 'Escape') {
// 			instance.close()
// 		}
//   }
		
// }

