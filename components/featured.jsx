import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFetch } from '../hooks/use-fetch';
import { FeaturedRecipes } from './featured-recipes';
import { Loading } from './loading';
import { Title } from './title';
export const Featured = () => {
  const { fetching, data } = useFetch({
    link: 'recipes/list?from=0&size=5&tags=under_30_minutes',
  });

  if (fetching) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Title text="Featured Recipes" />
      <FeaturedRecipes data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    gap: 20,
  },
});
