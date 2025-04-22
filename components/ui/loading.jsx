import { ActivityIndicator, Text, View } from 'react-native';

export const Loading = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <ActivityIndicator size="large" />
    </View>
  );
};
