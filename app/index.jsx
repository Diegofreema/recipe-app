import { Bottom } from '@/components/bottom';
import { Top } from '@/components/top';
import { ImageBackground, StyleSheet } from 'react-native';
export default function Index() {
  return (
    <ImageBackground
      style={styles.container}
      source={require('@/assets/images/background.png')}
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
