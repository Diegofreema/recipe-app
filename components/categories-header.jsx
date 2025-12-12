import { Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { changesFirstLetterToUpperCase, scaleFontSize } from '@/utils';
import * as Haptics from 'expo-haptics';

import { colors } from '@/constant';
import { useSelectedStore } from '@/store/use-selected';
export const CategoriesHeader = ({ categories }) => {
  const { selected, setSelected } = useSelectedStore();
  const flatListRef = useRef(null);
  useEffect(() => {
    if (categories && categories.length > 0 && !selected) {
      setSelected(categories[0]);
    }
  }, [selected, categories]);
  const onPress = async (item, index) => {
    setSelected(item);
    flatListRef.current?.scrollToIndex({ index });
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };
  return (
    <FlatList
      ref={flatListRef}
      data={categories}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[styles.button, item === selected && styles.selectButton]}
          onPress={() => onPress(item, index)}
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
