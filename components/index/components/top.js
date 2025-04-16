import { Image, StyleSheet, View } from 'react-native';
import { CustomText } from '@/components/custom-text';

export const Top = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/chef.png')}
        style={styles.image}
      />
      <CustomText text="100K+ Premium Recipe" style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    objectFit: 'cover',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    gap: 10,
  },
});
