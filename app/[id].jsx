import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { HeaderTitle } from '@/components/ui/header-title';
import { Wrapper } from '@/components/ui/wrapper';
import { useFetchDetails } from '@/hooks/use-fetch-detail';
import { Loading } from '@/components/ui/loading';
import { RecipeDetail } from '@/components/detail/recipe-detail';
const ProductId = () => {
  const { id } = useLocalSearchParams();
  const { loading, data } = useFetchDetails(id);
  if (loading) {
    return <Loading />;
  }

  console.log(data);

  return (
    <Wrapper>
      <HeaderTitle showBtn title={'Details'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecipeDetail data={data} />
      </ScrollView>
    </Wrapper>
  );
};

export default ProductId;
