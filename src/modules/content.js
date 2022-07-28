const apiEndpoint = 'https://api.tvmaze.com/';

const main = async () => {
  const fetchData = await fetch(`${apiEndpoint}shows`);
  const result = await fetchData.json();

  return result;
};

export default main;