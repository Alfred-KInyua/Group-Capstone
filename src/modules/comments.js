import { networkRequest, appID } from './likes.js';

const postComment = async (id, name, body) => {
  const response = await fetch(
    `${networkRequest}${appID}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

const getComments = async (id) => {
  const commentArr = await fetch(`${networkRequest}${appID}/comments?item_id=${id}`);
  const comments = commentArr.json();
  return comments;
};

export { postComment, getComments };