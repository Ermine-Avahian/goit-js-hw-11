import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  clearGallery,
  showNotification,
  showLoader,
  hideLoader,
} from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
let query = '';
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = event.currentTarget.elements.searchQuery.value.trim();

  if (query === '') {
    showNotification('Please enter a search query', 'warning');
    return;
  }

  clearGallery();
  page = 1;
  await fetchAndRenderImages();
});

async function fetchAndRenderImages() {
  try {
    showLoader();
    const data = await fetchImages(query, page);
    renderGallery(data.hits);

    if (data.totalHits > 12) {
      observeLoadMore();
    }

    new SimpleLightbox('.gallery a').refresh();
  } catch (error) {
    showNotification(error.message, 'error');
  } finally {
    hideLoader();
  }
}

function observeLoadMore() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(async entries => {
    if (entries[0].isIntersecting) {
      page += 1;
      await fetchAndRenderImages();
    }
  }, options);

  observer.observe(document.querySelector('.load-more'));
}
