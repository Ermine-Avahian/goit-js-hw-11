import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showNotification,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const galleryElement = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');
const loadMoreElement = document.querySelector('.load-more');

let query = '';
let page = 1;

let lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', event => {
  event.preventDefault();
  query = event.currentTarget.elements.searchQuery.value.trim();

  if (query === '') {
    showNotification('Please enter a search query', 'warning');
    return;
  }

  clearGallery(galleryElement);
  page = 1;
  fetchAndRenderImages();
});

function fetchAndRenderImages() {
  showLoader(loaderElement);

  fetchImages(query, page)
    .then(data => {
      if (data.hits.length === 0) {
        showNotification(
          'Sorry, there are no images matching your search query. Please, try again!',
          'error'
        );
        return;
      }

      renderGallery(data.hits, galleryElement);
      lightbox.refresh();

      if (data.totalHits > 12) {
        observeLoadMore();
      }
    })
    .catch(error => {
      showNotification(error.message, 'error');
    })
    .finally(() => {
      hideLoader(loaderElement);
    });
}

function observeLoadMore() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      page += 1;
      fetchAndRenderImages();
    }
  }, options);

  observer.observe(loadMoreElement);
}
