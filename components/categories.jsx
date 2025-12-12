import { useFetch } from '@/hooks/use-fetch';
import React from 'react';
import { View } from 'react-native';
import { CategoriesHeader } from './categories-header';
import { Loading } from './loading';

import { Recipes } from './recipes';
export const Categories = () => {
  const { fetching, data } = useFetch({
    link: 'tags/list',
  });
  const categories = data?.map((item) => item.name)?.slice(0, 8);
  if (fetching) {
    return <Loading />;
  }

  return (
    <View style={{ gap: 30 }}>
      <CategoriesHeader categories={categories} />
      <Recipes />
    </View>
  );
};
