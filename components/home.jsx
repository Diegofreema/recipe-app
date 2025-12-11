import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchInput } from './search-input';
import { Featured } from './featured';
import { Categories } from './categories';
export const Home = () => {
  return (
    <View style={styles.container}>
      <SearchInput navigate />
      <Featured />
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
