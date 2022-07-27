import { getComments } from './comments.js';
import { updateLikes } from './likes.js';
import main from './content.js';

const renderComments = async (id, modalCont) => {
  const comments = await getComments(id);
  modalCont.innerHTML = '';
  if (Array.isArray(comments)) {
    comments.forEach((el) => {
      const commentCont = document.createElement('p');
      commentCont.innerHTML = `${el.creation_date} ${el.username}: ${el.comment}`;
      modalCont.append(commentCont);
    });
  }
};

const commentsCount = async (id, cont) => {
  const comments = await getComments(id);
  if (Array.isArray(comments)) {
    const commentCount = comments.length;
    cont.innerHTML = `Comments: ${commentCount}`;
  } else {
    cont.innerHTML = 'Comments: 0';
  }
};

const likeCount = async (Id, cont) => {
  const count = await updateLikes(Id);
  cont.innerHTML = `${count} likes`;
};

const artCounter = async () => {
  const artArr = await main();
  const artsLength = artArr.length;
  return artsLength;
};

export {
  renderComments, likeCount, commentsCount, artCounter,
};