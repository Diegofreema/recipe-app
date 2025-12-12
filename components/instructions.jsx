import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Title } from './title';
import { scaleFontSize } from '@/utils';

export const Instructions = ({ instructions }) => {
  return (
    <View style={{ gap: 10 }}>
      <Title text={'Instructions'} />
      {instructions.map((item) => (
        <View key={item.position} style={styles.instructionContainer}>
          <Text style={styles.positionText}>{item?.position}</Text>
          <Text style={styles.text}>{item?.display_text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  instructionContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  positionText: {
    fontSize: scaleFontSize(20),
  },
  text: {
    fontSize: scaleFontSize(18),
    flex: 1,
  },
});
