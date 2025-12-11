import { scaleFontSize, trimText } from '@/utils';
import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Ratings } from './ratings';
import { RecipeFooter } from './recipe-footer';
const { width } = Dimensions.get('window');

export const FeaturedRecipe = ({ recipe }) => {
  const boxWidth = (width - 40) * 0.8;
  const recipeName = trimText(recipe.name, 15);
  const authorName =
    recipe.credits && recipe.credits?.length > 0
      ? recipe.credits[0]?.name
      : 'Unknown';

  const totalTime = recipe?.total_time_minutes;
  const rating = recipe.user_ratings?.score * 5;
  console.log(rating);

  return (
    <View style={[styles.container, { width: boxWidth }]}>
      <Text style={styles.title}>{recipeName}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={recipe.thumbnail_url}
          placeholder={require('@/assets/images/food.png')}
          contentFit="cover"
        />
      </View>
      <Ratings rating={rating} />
      <RecipeFooter
        authorName={authorName || 'Unknown'}
        totalTime={totalTime}
      />
    </View>
  );
};
const imageWidth = width * 0.25;
const styles = StyleSheet.create({
  container: {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: scaleFontSize(14),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 50,
    overflow: 'hidden',
    position: 'absolute',
    right: 8,
    top: imageWidth / -3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
