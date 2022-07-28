import main from './content.js';
import { renderImage } from './createImage.js';
import { postLikes } from './likes.js';
import { likeCount } from './helperMethods.js';

const grid = document.querySelector('.grid__container-movies');
const displayModal = document.querySelector('.modal-content');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const renderCards = async () => {
  grid.innerHTML = '';
  const dataList = await main();
  dataList.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('grid-item');

    renderImage(el.image.medium, card);

    const nameLike = document.createElement('div');

    const showName = document.createElement('h3');
    showName.classList.add('showname');
    showName.innerHTML = el.name;

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fas');
    likeIcon.classList.add('fa-heart');

    const likeCounter = document.createElement('p');
    likeCounter.classList.add('like-counter');

    likeCount(el.id, likeCounter);

    likeIcon.addEventListener('click', async () => {
      await postLikes(el.id);
      await likeCount(el.id, likeCounter);
    });

    nameLike.append(showName, likeIcon, likeCounter);

    
    card.append(nameLike, commentBtn);
    grid.append(card);
  });
};

export default renderCards;