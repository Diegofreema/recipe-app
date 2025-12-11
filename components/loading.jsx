import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const Loading = ({ styles }) => {
  return (
    <View style={styles}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
