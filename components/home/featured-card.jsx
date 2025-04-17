import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { trimText } from '@/lib/util';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { colors } from '@/constant';
export const FeaturedCard = ({ item }) => {
  const { width } = useWindowDimensions();

  const name = item.credits[0].name;
  const cookingTime =
    item?.cook_time_minutes ||
    item?.prep_time_minutes ||
    item?.total_time_minutes;
  const starRating = Math.round(item.user_ratings.score * 5);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, { width: (width - 30) * 0.7 }]}
    >
      <View style={styles.top}>
        <Text style={{ flex: 1 }} numberOfLines={1}>
          {item.name}
        </Text>

        <Image src={item.thumbnail_url} style={styles.img} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <AntDesign
              key={index}
              name={
                index < starRating
                  ? 'star'
                  : index === starRating
                  ? 'staro'
                  : ''
              }
              size={14}
              color={colors.yellow}
            />
          ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        {name ? (
          <Text style={{ color: colors.grey }}>{name}</Text>
        ) : (
          <Text style={{ color: colors.grey }}>Anonymous</Text>
        )}
        {cookingTime > 0 && (
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Entypo name="stopwatch" size={24} color={colors.textGrey} />
            <Text style={{ color: colors.textGrey }}>{cookingTime} min</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: 50,
    marginTop: -40,
    zIndex: 5,
  },
});
