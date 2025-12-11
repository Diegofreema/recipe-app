import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { fetchData } from '../api';
import { Title } from './title';
import { FeaturedRecipes } from './featured-recipes';
export const Featured = () => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const onFetchData = async () => {
      try {
        const res = await fetchData();

        setData(res.results);
      } catch (error) {
        console.log(error);
      } finally {
        setFetching(false);
      }
    };
    onFetchData();
  }, []);

  if (fetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
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
    gap: 60,
  },
});
