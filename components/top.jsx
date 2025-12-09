import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

export const Top = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/chef.png')}
        style={styles.image}
      />
      <Text style={styles.text}>100K+ Premium Recipe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
