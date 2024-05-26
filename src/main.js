import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import * as pixabayApi from './js/pixabay-api';
import { imagesInfo } from './js/render-functions';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', event => {
  event.preventDefault();

  const userValue = event.target.elements.query.value.trim();

  if (userValue === '') {
    iziToast.show({
      title: 'Error',
      message: 'Please enter a search query!',
      backgroundColor: '#EF4040',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  pixabayApi
    .searchImages(userValue)
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
        iziToast.show({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
        });
        return;
      }

      const markup = imagesInfo(data.hits);
      gallery.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error => {
      loader.style.display = 'none';

      iziToast.show({
        title: 'Error',
        message: 'Sorry, something went wrong. Please try again later!',
        backgroundColor: '#EF4040',
      });
    });

  form.reset();
});
