const involvement_api_url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appId = 'meucUCU2jpjkDcWN5JDX';

const postLikes = async (id) => {
  const response = await fetch(
    `${involvement_api_url}${appId}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

const getLikes = async () => {
  const arr_of_likes_data = await fetch(`${involvement_api_url}${appId}/likes`);
  const arr_of_likes = await arr_of_likes_data.json();
  return arr_of_likes;
};

const updateLikes = async (id) => {
  const stored_likes_data = await getLikes();
  let result = 0;
  stored_likes_data.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      result = e.likes;
    }
  });

  return result;
};

export {
  getLikes, postLikes, updateLikes, involvement_api_url, appId
};