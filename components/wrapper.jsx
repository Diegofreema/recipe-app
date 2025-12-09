import { colors } from '@/constant';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export const Wrapper = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, { paddingHorizontal: 20 }]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
