import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { changesFirstLetterToUpperCase, scaleFontSize } from '@/utils';
import { colors } from '@/constant';
export function Nutrition({ nutritionArray }) {
  return (
    <View style={{ gap: 10 }}>
      {nutritionArray.map((item) => (
        <View key={item.label} style={styles.nutritionContainer}>
          <Text style={styles.label}>
            {changesFirstLetterToUpperCase(item?.label)}
          </Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nutritionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.darkGrey,
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontSize: scaleFontSize(17),
    color: colors.black,
  },
  value: {
    fontSize: scaleFontSize(16),
    fontWeight: '600',
    color: '#101010',
  },
});
