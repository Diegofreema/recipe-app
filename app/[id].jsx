import { Header } from '@/components/header';
import { Wrapper } from '@/components/wrapper';
import { useLocalSearchParams } from 'expo-router';
import { RecipeDetails } from '@/components/recipe-details';

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <Wrapper>
      <Header title={''} showIcon />
      <RecipeDetails id={id} />
    </Wrapper>
  );
};

export default DetailsScreen;
