import { FlatList, StyleSheet, View } from 'react-native';
import { CustomText } from '../custom-text';
import { FeaturedCard } from './featured-card';
export const Featured = ({ data }) => {
  return (
    <View style={styles.container}>
      <CustomText text={'Featured Recipes'} style={styles.title} />
      <FlatList
        data={data}
        renderItem={({ item }) => <FeaturedCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{
          gap: 10,
          padding: 10,
          paddingTop: 40,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
