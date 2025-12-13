import { FlatList } from 'react-native';
import { FeaturedRecipe } from './featured-recipe';

export const FeaturedRecipes = ({ data }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FeaturedRecipe recipe={item} />}
      contentContainerStyle={{
        gap: 15,
        paddingVertical: 35,
      }}
    />
  );
};
