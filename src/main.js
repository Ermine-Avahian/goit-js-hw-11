// main.js
import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showLoader,
  hideLoader,
  showNoResultsMessage,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
let page = 1;
const perPage = 12;

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = form.querySelector('input[name="searchQuery"]').value.trim();

  if (!query) {
    return;
  }

  page = 1;
  gallery.innerHTML = '';
  showLoader();

  try {
    const data = await fetchImages(query, page, perPage);

    if (data.hits.length === 0) {
      showNoResultsMessage();
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    hideLoader();
  }
});
