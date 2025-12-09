import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
export const Header = ({ showIcon, title }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {showIcon ? (
        <Pressable onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={25} />
        </Pressable>
      ) : (
        <View style={{ width: 50, height: 1 }} />
      )}

      {title && <Text style={styles.text}>{title}</Text>}
      <View style={{ width: 50, height: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
