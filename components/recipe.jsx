/* eslint-disable prettier/prettier */

import { colors } from '@/constant';
import { scaleFontSize, trimText } from '@/utils';
import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
const { width } = Dimensions.get('window');
export const Recipe = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={recipe.thumbnail_url}
          placeholder={require('@/assets/images/food.png')}
          contentFit="cover"
          placeholderContentFit="cover"
        />
      </View>
      <Text style={styles.text}>{trimText(recipe.name, 20)}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>Time</Text>
        <Text style={styles.duration}>{recipe?.total_time_minutes} mins</Text>
      </View>
    </View>
  );
};

const containerWidth = (width - 50) / 2;
const imageSize = containerWidth * 0.7;
const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    height: containerWidth * 1.3,
    backgroundColor: colors.grey,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    overflow: 'hidden',
    marginTop: -50,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 15,
    fontSize: scaleFontSize(18),
    fontWeight: '600',
    textAlign: 'center',
  },
  time: {
    fontSize: scaleFontSize(14),
    color: '#555',
  },
  duration: {
    fontWeight: '600',
    marginTop: 3,
    fontSize: scaleFontSize(16),
  },
  timeContainer: {
    marginTop: 'auto',
    marginBottom: 15,
  },
});
