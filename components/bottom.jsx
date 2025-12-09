import { colors } from '@/constant';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './button';
import { useRouter } from 'expo-router';

const login = true;

export const Bottom = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* inner view */}
      <View>
        <Text style={[styles.text, styles.bigText]}>Get</Text>
        <Text style={[styles.text, styles.bigText]}>Cooking</Text>
      </View>
      {/* inner view */}
      <Text style={[styles.text]}>Simple way to find Tasty Recipe</Text>
      <Button
        text="Start Cooking ->"
        styles={{ width: '60%', marginHorizontal: 'auto' }}
        onPress={() => router.replace('/home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
  bigText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
