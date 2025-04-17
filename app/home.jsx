import { Featured } from '@/components/home/featured';
import { HeaderTitle } from '@/components/ui/header-title';
import { SearchInput } from '@/components/ui/search-input';
import { Wrapper } from '@/components/ui/wrapper';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
const HomeScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const onPress = () => {
    router.push('/search');
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url =
        'https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'e91e1b5272msh83bedc2f51c314fp188ccbjsn5d3bfe03e985',
          'x-rapidapi-host': 'tasty.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const { results } = await response.json();
        setData(results);
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <HeaderTitle title="Home" showBtn={false} />
        <SearchInput search={false} onPress={onPress} />
        <Featured data={data} />
      </Wrapper>
    </View>
  );
};

export default HomeScreen;
