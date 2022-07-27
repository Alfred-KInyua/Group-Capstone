import { network_request, appID } from './likes.js';

const postComment = async (id, name, body) => {
  const response = await fetch(
    `${network_request}${appID}/comments`, {
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
  const commentArr = await fetch(`${network_request}${appID}/comments?item_id=${id}`);
  const comments = commentArr.json();
  return comments;
};

export { postComment, getComments };