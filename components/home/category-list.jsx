import { colors } from '@/constant';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const CategoryList = ({ tags, selectedTag, setSelectedTag }) => {
  return (
    <FlatList
      data={tags}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.titleContainer,
            {
              backgroundColor:
                selectedTag === item.name ? colors.green : 'transparent',
            },
          ]}
          onPress={() => setSelectedTag(item.name)}
        >
          <Text
            style={[
              styles.title,
              { color: selectedTag === item.name ? '#fff' : '#000' },
            ]}
          >
            {item.display_name}
          </Text>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    gap: 10,
  },
  titleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },

  title: {
    color: colors.green,
  },
});
