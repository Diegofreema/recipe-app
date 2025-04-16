import { HeaderTitle } from '@/components/ui/header-title';
import { Text, View } from 'react-native';
import { Wrapper } from '@/components/ui/wrapper';
import { SearchInput } from '@/components/ui/search-input';
import { useRouter } from 'expo-router';
const HomeScreen = () => {
  const router = useRouter();
  const onPress = () => {
    router.push('/search');
  };
  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <HeaderTitle title="Home" showBtn={false} />
        <SearchInput search={false} onPress={onPress} />
      </Wrapper>
    </View>
  );
};

export default HomeScreen;
