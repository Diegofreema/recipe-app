import { useFetch } from '@/hooks/use-fetch';
import { useSelectedStore } from '@/store/use-selected';
import { FlatList } from 'react-native';
import { Recipe } from './recipe';
import { RecipeLoader } from './recipe-loader';
export const Recipes = () => {
  const { selected } = useSelectedStore();
  const { fetching, data } = useFetch({
    link: `recipes/list?from=0&size=10&tags=${selected}`,
  });
  if (fetching) {
    return <RecipeLoader />;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Recipe recipe={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        gap: 10,
        marginTop: 50,
      }}
    />
  );
};
