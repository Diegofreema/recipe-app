/* eslint-disable prettier/prettier */

import { CustomText } from '@/components/custom-text';
import { StyleSheet, View } from 'react-native';
import { Button } from '@/components/ui/button';
import { useRouter } from 'expo-router';
export const Bottom = () => {
  const router = useRouter();
  const onPress = () => {
    router.replace('/home');
  };
  return (
    <View style={styles.container}>
      <CustomText text="Get" style={styles.title} />
      <CustomText text="Cooking" style={styles.title} />
      <CustomText text="Simple way to find Tasty Recipe" style={styles.text} />
      <Button
        onPress={onPress}
        btnTitle={'Start cooking'}
        icon={'arrowright'}
        style={{ marginTop: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    marginTop: 20,
  },
});
