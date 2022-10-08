import { galleryItems } from './gallery-items.js';
// Change code below this line

const mainGallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

mainGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

mainGallery.addEventListener('click', makeBigImage);



function createGalleryItems(galleryItems) { //*создание разметки из объекта
    const markup = galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
                />
            </a>
        </div>
        `;
    }).join('');
    return markup;
}

function makeBigImage(evt) {
    evt.preventDefault();
}
