import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadingSpinner = document.querySelector('.loading-spinner');

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loadingSpinner.classList.remove('hidden');
}

function hideLoader() {
  loadingSpinner.classList.add('hidden');
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  showLoader();

  fetchImages(query)
    .then(images => {
      renderImages(images, gallery);
    })
    .catch(error => {
      console.error('Error handling images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
