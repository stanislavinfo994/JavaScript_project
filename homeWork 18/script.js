const galleryItems = document.querySelectorAll('.js--gal_item');

const modal = document.querySelector('.js--modal');
const modalCloseBtn = document.querySelector('.js--modal__close');
const modalPrevBtn = document.querySelector('.js--modal__prev');
const modalNextBtn = document.querySelector('.js--modal__next');
const modalContent = document.querySelector('.js--modal__content');

let currentImageIndex;
function openModal(imageIndex) {
    currentImageIndex = imageIndex;
    modalContent.innerHTML = `<img src="${galleryItems[imageIndex].querySelector('img').src}" alt="img">`;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    openModal(currentImageIndex);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    openModal(currentImageIndex);
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(index);
    });
});

modalPrevBtn.addEventListener('click', showPrevImage);
modalNextBtn.addEventListener('click', showNextImage);
modalCloseBtn.addEventListener('click', closeModal);
