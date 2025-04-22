import { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Loading } from '@/components/ui/loading';
import { apiKey } from '@/config';
import { useFetchData } from '@/hooks/use-fetch-data';
import { CategoryMealsList } from './category-meals-list';
export const CategoryMeals = ({ selectedTag }) => {
  const { data, loading } = useFetchData(selectedTag);
  if (loading) {
    return <Loading />;
  }

  return <CategoryMealsList data={data} />;
};
