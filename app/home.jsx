import { Featured } from '@/components/home/featured';
import { HeaderTitle } from '@/components/ui/header-title';
import { SearchInput } from '@/components/ui/search-input';
import { Wrapper } from '@/components/ui/wrapper';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FilterRecipe } from '@/components/home/filter-recipe';
import { apiKey } from '@/config';
import { Loading } from '@/components/ui/loading';
import { useFetchData } from '@/hooks/use-fetch-data';
const HomeScreen = () => {
  const router = useRouter();
  const { loading, data } = useFetchData();
  const onPress = () => {
    router.push('/search');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <HeaderTitle title="Home" showBtn={false} />
        <SearchInput search={false} onPress={onPress} />
        <Featured data={data} />
        <FilterRecipe />
      </Wrapper>
    </View>
  );
};

export default HomeScreen;
