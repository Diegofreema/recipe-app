import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Title } from './title';
import { fetchData } from '../api';
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
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
