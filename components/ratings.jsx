import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constant';
{
  /* <Text>
        {'★'.repeat(fullStars)}
        {halfStar ? '½' : ''}
        {'☆'.repeat(5 - fullStars - halfStar)}
      </Text> */
}
export const Ratings = ({ rating }) => {
  const clampedRating = Math.max(0, Math.min(5, rating)); // 4.5
  const fullStars = Math.floor(clampedRating); // 4
  // Determine if there is a half star , clampedRating - fullStars = 0.5
  const halfStar = clampedRating - fullStars >= 0.5 ? 1 : 0;

  return (
    <View style={styles.container}>
      {[...Array(5)].map((_, index) => {
        // 4 full stars, 1 half star
        if (index < fullStars) {
          return (
            <Ionicons key={index} name="star" size={16} color={colors.yellow} />
          );
        }

        if (index === fullStars && halfStar) {
          return (
            <Ionicons
              key={index}
              name="star-half"
              size={16}
              color={colors.yellow}
            />
          );
        }
        return (
          <Ionicons
            key={index}
            name="star-outline"
            size={16}
            color={colors.yellow}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});
