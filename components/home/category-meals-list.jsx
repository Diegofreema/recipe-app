import { colors } from '@/constant';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DishCard } from '@/components/ui/dish-card';

export const CategoryMealsList = ({ data, numColumns }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <DishCard item={item} full={numColumns === 2} />
      )}
      keyExtractor={(item) => item.id}
      horizontal={numColumns !== 2}
      contentContainerStyle={[
        styles.container,
        { gap: numColumns === 2 ? 100 : 10 },
      ]}
      columnWrapperStyle={numColumns === 2 && { gap: 20 }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={{ textAlign: 'center' }}>No recipe found</Text>
      )}
      numColumns={numColumns}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginTop: 20,
    paddingTop: 50,
  },
});
