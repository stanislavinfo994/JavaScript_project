const slider = document.querySelector('.slider');
const prevButton = slider.querySelector('.prev');
const nextButton = slider.querySelector('.next');
const images = slider.querySelectorAll('img');

let currentImageIndex = 0;

function showImage(index) {
    images[currentImageIndex].style.display = 'none';
    images[index].style.display = 'block';
    currentImageIndex = index;

    if (currentImageIndex === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (currentImageIndex === images.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

prevButton.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        showImage(currentImageIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentImageIndex < images.length - 1) {
        showImage(currentImageIndex + 1);
    }
});

showImage(currentImageIndex);
