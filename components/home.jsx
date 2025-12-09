import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchInput } from './search-input';
import { Featured } from './featured';
export const Home = () => {
  return (
    <View style={styles.container}>
      <SearchInput navigate />
      <Featured />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
