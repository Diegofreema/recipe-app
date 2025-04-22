import { apiKey } from '@/config';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CategoryList } from '@/components/home/category-list';
import { CategoryMeals } from './category-meals';
export const Categories = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      const url = 'https://tasty.p.rapidapi.com/tags/list?from=0&size=7';
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
        const limitedResults = results.slice(0, 8);
        setTags(limitedResults);
        setSelectedTag(limitedResults[0].name);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <View>
      <CategoryList
        tags={tags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <CategoryMeals selectedTag={selectedTag} />
    </View>
  );
};
