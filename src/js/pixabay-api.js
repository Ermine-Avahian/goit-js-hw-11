const API_KEY = '45375111-d1e8183fd09326f55157dfb1e';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      return [];
    });
}
