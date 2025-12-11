import { fetchData } from '@/api';
import { useEffect, useState } from 'react';

export const useFetch = ({ link }) => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const onFetchData = async () => {
      try {
        const res = await fetchData(link);

        setData(res.results);
      } catch (error) {
        console.log(error);
      } finally {
        setFetching(false);
      }
    };
    onFetchData();
  }, []);

  return { fetching, data };
};
