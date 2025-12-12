import { useFetch } from '@/hooks/use-fetch';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Loading } from './loading';
import { Recipe } from './recipe';
import { scaleFontSize } from '@/utils';
export const SearchRecipes = ({ query }) => {
  const { fetching, data } = useFetch({
    link: `recipes/list`,
  });
  if (fetching) {
    return <Loading />;
  }
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Recipe recipe={item} style={{ flex: 1 }} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          gap: 100,
          paddingTop: 50,
          paddingBottom: 150,
        }}
        columnWrapperStyle={{ gap: 15 }}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Search query for "{query}" is not found
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: scaleFontSize(25),
    color: 'black',
    fontWeight: 'bold',
  },
});
