import { useFetchSingleData } from '@/hooks/use-fetch';
import { Image } from 'expo-image';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Loading } from './loading';
import { Title } from './title';
import { Nutrition } from './nutritions';
import { Instructions } from './instructions';
const { height } = Dimensions.get('window');
export const RecipeDetails = ({ id }) => {
  const { fetching, data } = useFetchSingleData({
    link: `recipes/get-more-info?id=${id}`,
  });

  if (fetching) {
    return <Loading />;
  }

  const nutritionArray = Object.entries(data.nutrition || {})
    .map(([key, value]) => ({
      label: key,
      value: value,
    }))
    .filter((item) => item.label !== 'updated_at');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50, gap: 15 }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={data?.thumbnail_url}
          contentFit="cover"
        />
      </View>
      <Title text={data?.name} />
      <Nutrition nutritionArray={nutritionArray} />
      <Instructions instructions={data?.instructions} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.25,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
