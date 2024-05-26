export function searchImages(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44002996-fc99192b9f50d4483edb9d78f',
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${params.toString()}`;

  return fetch(url).then(response => response.json());
}
