import { useEffect, useState } from 'react';
import { apiKey } from '@/config';

export const useFetchData = (tag = 'under_30_minutes') => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=${tag}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const { results } = await response.json();
        setData(results);
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [tag]);

  return { loading, data };
};
