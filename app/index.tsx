import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Top } from '@/components/index/components/top';
import { Bottom } from '@/components/index/components/bottom';

export default function Index() {
  return (
    <ImageBackground
      source={require('@/assets/images/background.png')}
      style={styles.container}
    >
      <Top />
      <Bottom />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
