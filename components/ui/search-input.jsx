import { colors } from '@/constant';
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const SearchInput = ({ search, onPress, setValue, value }) => {
  if (search) {
    return (
      <View style={styles.container}>
        <AntDesign name="search1" size={20} color={colors.lightGrey} />
        <TextInput
          style={styles.input}
          placeholder="Search recipe"
          value={value}
          onChangeText={setValue}
        />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <AntDesign name="search1" size={20} color={colors.lightGrey} />
      <Text style={[styles.input, { color: colors.grey }]}>Search recipe</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },

  input: {
    color: 'black',
    flex: 1,
  },
});
