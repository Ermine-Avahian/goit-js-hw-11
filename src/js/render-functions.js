export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => createCardMarkup(image)).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

function createCardMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <a href="${largeImageURL}" class="gallery__item">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery__image"/>
      <div class="gallery__info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
      </div>
    </a>
  `;
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showErrorNotification() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please, try again!',
    position: 'topRight',
  });
}

export function showNotification(message, type = 'info') {
  iziToast[type]({
    title: message,
    position: 'topRight',
  });
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('visible');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('visible');
}
