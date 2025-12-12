import { Header } from '@/components/header';
import { Wrapper } from '@/components/wrapper';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <Wrapper>
      <Header title={''} showIcon />
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{id}</Text>
    </Wrapper>
  );
};

export default DetailsScreen;
