import { updateLikes } from './likes.js';
import main from './content.js';


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
  likeCount, artCounter
};