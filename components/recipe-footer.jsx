import { colors } from '@/constant';
import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const RecipeFooter = ({ authorName, totalTime }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>By {authorName}</Text>
      <View style={styles.subContainer}>
        <Fontisto name="stopwatch" size={23} color={colors.text} />
        <Text style={styles.name}>{totalTime} mins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontWeight: '500',
    color: colors.text,
  },
  subContainer: { flexDirection: 'row', alignItems: 'center', gap: 5 },
});
