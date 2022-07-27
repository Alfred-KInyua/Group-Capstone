const api_endpoint = 'https://api.tvmaze.com/';

const main = async () => {
  const fetch_data = await fetch(`${api_endpoint}shows`);
  const result = await fetch_data.json();

  return result;
};

export default main;