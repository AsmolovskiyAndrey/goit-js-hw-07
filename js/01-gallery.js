import { galleryItems } from './gallery-items.js';
// Change code below this line

const mainGallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

mainGallery.innerHTML = galleryItemsMarkup;

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

let modalWindow = '';

function makeBigImage(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
    return;
    }

    modalWindow = basicLightbox.create(
        `
    <img src=${evt.target.dataset.source}>
    `
    );

    modalWindow.show();
}

// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// }



