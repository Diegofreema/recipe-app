import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { apiKey } from '@/config';
import { Categories } from '@/components/home/categories';
import { CategoryMeals } from '@/components/home/category-meals';
export const FilterRecipe = () => {
  const [filter, setFilter] = useState('');

  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
