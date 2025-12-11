import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { changesFirstLetterToUpperCase, scaleFontSize } from '@/utils';
import { colors } from '@/constant';

export const CategoriesHeader = ({ categories }) => {
  const [selected, setSelected] = useState(categories?.[0]);
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.button, item === selected && styles.selectButton]}
          onPress={() => setSelected(item)}
        >
          <Text style={[styles.text, item === selected && styles.selectText]}>
            {changesFirstLetterToUpperCase(item)}
          </Text>
        </TouchableOpacity>
      )}
      horizontal
      contentContainerStyle={{ gap: 15 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.green,
    fontWeight: '500',
    fontSize: scaleFontSize(16),
  },
  selectText: {
    color: colors.white,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  selectButton: {
    backgroundColor: colors.green,
  },
});
