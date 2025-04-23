import { useEffect, useMemo, useState } from 'react';
import { apiKey } from '@/config';

export const useFilterData = (name) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data) || name.length < 3) return [];
    return data.filter((item) => {
      const title = item.name.toLowerCase();
      const searchTerm = name.toLowerCase();
      return title.includes(searchTerm);
    });
  }, [data, name]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://tasty.p.rapidapi.com/recipes/list`;
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
  }, []);

  return { loading, filteredData, data };
};
