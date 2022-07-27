const network_request = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appID = 'Km2IRmmIjbL7vNKDRpvP';

const postLike = async (id) => {
  const data = await fetch(
    `${network_request}${appID}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return data;
};

const getLikes = async () => {
  const likes_data = await fetch(`${network_request}${appID}/likes`);
  const likesArray = await likes_data.json();
  return likesArray;
};

const updateLikes = async (id) => {
  const change_likes_data = await getLikes();
  let results = 0;
  change_likes_data.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      results = e.likes;
    }
  });

  return results;
};

export {
  getLikes, postLike, updateLikes, network_request, appID,
};