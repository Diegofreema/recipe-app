import { Text, View } from 'react-native';
import { CategoryMealsList } from '@/components/home/category-meals-list';
export const SearchComponent = ({ data }) => {
  return <CategoryMealsList data={data} numColumns={2} />;
};
