import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { CustomText } from '@/components/custom-text';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const HeaderTitle = ({ title, showBtn }) => {
  const router = useRouter();
  const onPress = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      {showBtn ? (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <AntDesign name="arrowleft" size={25} color="black" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <CustomText text={title} style={styles.title} />
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
