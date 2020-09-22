const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainer = document.querySelector('#gallery');

const makeImages = options => {
  return options.map(option => {
    const imageLi = document.createElement('li');
    const imageEl = document.createElement('img');
    imageEl.setAttribute('src', `${option.url}`);
    imageEl.setAttribute('alt', `${option.alt}`);
    imageLi.appendChild(imageEl);
    console.log('imageLi', imageLi);

    return imageLi;
  });
};

const galleryItems = makeImages(images);

galleryContainer.append(...galleryItems);
