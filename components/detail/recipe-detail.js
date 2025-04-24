import { Image } from 'expo-image';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { CustomText } from '../custom-text';
import { Instructions } from './instructions';
export const RecipeDetail = ({ data }) => {
  const { height } = useWindowDimensions();
  const nutrition = Object.entries(data?.nutrition ?? {})
    .map(([key, value]) => {
      if (key === 'updated_at') return;
      return {
        name: key,
        value: value,
      };
    })
    .filter(Boolean);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data?.thumbnail_url }}
        style={{ width: '100%', height: height * 0.25, borderRadius: 10 }}
        contentFit="cover"
        placeholder={require('@/assets/images/food.png')}
        placeholderContentFit="cover"
      />
      <CustomText text={data?.name} style={styles.title} />
      <View style={styles.nutrition}>
        {nutrition.map((item, index) => (
          <View key={index} style={styles.nutritionItem}>
            <CustomText
              text={item?.name}
              style={{ color: 'black', fontWeight: 'bold' }}
            />
            <CustomText text={item?.value} style={{ color: '#ccc' }} />
          </View>
        ))}
      </View>
      <Instructions instructions={data?.instructions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  nutrition: {
    marginTop: 10,
  },
  nutritionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#EFEFEF',
    padding: 8,
    borderRadius: 8,
  },
});
