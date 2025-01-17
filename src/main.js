import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
// console.dir(loaderEl);

const createGalleryCardTempplate = imgInfo => {
  // console.log(imgInfo);
  return `<li class="gallery-card">
  <a href="${imgInfo.largeImageURL}" class="gallery-item">
  <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}"/>
  <div class="text-info">
             <p>
                <span>Likes</span>
                <span>${imgInfo.likes}</span>
                
            </p>
            <p>
                <span>Views</span>
                <span>${imgInfo.views}</span>
                
            </p>
            <p>
                
                <span>Comments</span>
                <span>${imgInfo.comments}</span>
            </p>
            <p>
                
                <span>Downloads</span>
                <span>${imgInfo.downloads}</span>
            </p>
       
          </div>
  </a>
  </li>
  `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();
  console.log(searchedQuery);
  searchFormEl.reset();
  loaderEl.classList.remove('is-hidden');
  fetch(
    `https://pixabay.com/api/?key=48247224-415eb498da8da81883dddb739&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data.hits);
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        galleryEl.innerHTML = '';

        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTempplate(el))
        .join();
      galleryEl.innerHTML = galleryTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
});
// loaderEl.classList.remove('is-hidden');
// loaderEl.classList.add('is-hidden');
