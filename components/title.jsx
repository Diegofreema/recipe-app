import { scaleFontSize } from '@/utils';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Title = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: scaleFontSize(21),
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
