import { View } from 'react-native';
import React from 'react';
import { useFetch } from '@/hooks/use-fetch';
import { Loading } from './loading';
import { CategoriesHeader } from './categories-header';
export const Categories = () => {
  const { fetching, data } = useFetch({
    link: 'tags/list',
  });
  const categories = data?.map((item) => item.name)?.slice(0, 8);

  if (fetching) {
    return <Loading />;
  }

  return (
    <View>
      <CategoriesHeader categories={categories} />
    </View>
  );
};
