import { apiKey, baseUrl } from './config';
export const fetchData = async (link) => {
  const url = `${baseUrl}/${link}`;
  // GET, POST, PUT, DELETE, PATCH
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
