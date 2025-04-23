import { colors } from '@/constant';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const { width } = Dimensions.get('window');
export const DishCard = ({ item, full }) => {
  const router = useRouter();
  const navigateToRecipe = () => {
    router.push(`/${item.id}`);
  };
  return (
    <TouchableOpacity
      style={[styles.card, full && { flex: 1 }]}
      activeOpacity={0.5}
      onPress={navigateToRecipe}
    >
      <Image
        src={item.thumbnail_url}
        style={styles.img}
        defaultSource={require('@/assets/images/food.png')}
      />
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.bottom}>
        <Text style={{ color: 'grey' }}>Time</Text>
        <Text>
          {item?.cook_time_minutes ||
            item?.prep_time_minutes ||
            item?.total_time_minutes}{' '}
          mins
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    width: width * 0.4,
    height: 200,
    backgroundColor: colors.darkGrey,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    gap: 10,
    marginTop: 20,
    paddingTop: 50,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -150,
    marginBottom: 20,
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});
