import { FlatList, StyleSheet } from 'react-native';
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
        paddingHorizontal: 20,
        gap: 15,
        paddingVertical: 35,
      }}
    />
  );
};

const styles = StyleSheet.create({});
