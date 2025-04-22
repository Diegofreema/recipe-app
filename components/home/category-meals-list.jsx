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

export const CategoryMealsList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <DishCard item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={() => <Text>No recipe found</Text>}
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
