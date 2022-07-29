const networkRequest = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appID = 'Km2IRmmIjbL7vNKDRpvP';

const postLike = async (id) => {
  const data = await fetch(
    `${networkRequest}${appID}/likes`, {
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
  const likesData = await fetch(`${networkRequest}${appID}/likes`);
  const likesArray = await likesData.json();
  return likesArray;
};

const updateLikes = async (id) => {
  const changeLikesData = await getLikes();
  let results = 0;
  changeLikesData.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      results = e.likes;
    }
  });

  return results;
};

export {
  getLikes, postLike, updateLikes, networkRequest, appID,
};