import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '@/constant';

export const Button = (props) => {
  return (
    <Pressable style={[styles.button, props.styles]} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
});
