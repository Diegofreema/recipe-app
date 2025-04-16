import { TouchableOpacity } from 'react-native';
import { CustomText } from '@/components/custom-text';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export const Button = ({ onPress, btnTitle, style, textStyle, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, style]}
      activeOpacity={0.8}
    >
      <CustomText text={btnTitle} style={[styles.text, textStyle]} />
      {icon && <AntDesign name={icon} color="white" size={15} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
});
