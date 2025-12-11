import { FlatList, View } from 'react-native';
import { useFetch } from '@/hooks/use-fetch';
import { useSelectedStore } from '@/store/use-selected';
import { Loading } from './loading';
import { Recipe } from './recipe';
export const Recipes = () => {
  const { selected } = useSelectedStore();
  const { fetching, data } = useFetch({
    link: `recipes/list?from=0&size=10&tags=${selected}`,
  });
  if (fetching) {
    return <Loading />;
  }

  console.log({ data });

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
