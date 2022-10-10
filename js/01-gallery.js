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

    document.addEventListener('keydown', onEscCloseModal); //* вешаем слушателя на клавиши при открытой модалке
}

function onEscCloseModal(evt) { //* функция закрывает модалку при нажатии Escape
    if (evt.code === 'Escape') {
        modalWindow.close();
        document.removeEventListener('keydown', onEscCloseModal); //* снимаем слушателя на клавиши при закрытии модалки
    }
}



