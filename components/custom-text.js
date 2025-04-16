import { StyleSheet, Text } from 'react-native';

export const CustomText = ({ text, style }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
