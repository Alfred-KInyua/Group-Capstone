import main from './content.js';
import { renderImage } from './buildImage.js';
import popModal from './popModal.js';
import { postLike } from './likes.js';
import { likeCount } from './helpers.js';

const grid = document.querySelector('.grid__container');
const displayModal = document.querySelector('.modal-content');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const renderCards = async () => {
  grid.innerHTML = '';
  const dataList = await main();
  dataList.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('grid__container-cards');

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
      await postLike(el.id);
      await likeCount(el.id, likeCounter);
    });

    nameLike.append(showName, likeIcon, likeCounter);

    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.innerHTML = 'comment';
    commentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popModal(el);
      displayModal.style.display = 'block';
      grid.style.display = 'none';
      header.style.display = 'none';
      footer.style.display = 'none';
    });
    card.append(nameLike, commentBtn);
    grid.append(card);
  });
};

export default renderCards;