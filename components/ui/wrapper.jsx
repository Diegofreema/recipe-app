import { View } from 'react-native';

export const Wrapper = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 15 }}>
      {children}
    </View>
  );
};
