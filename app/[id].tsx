import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { HeaderTitle } from '@/components/ui/header-title';
import { Wrapper } from '@/components/ui/wrapper';

const ProductId = () => {
  const { id } = useLocalSearchParams();

  return (
    <Wrapper>
      <HeaderTitle showBtn title={'Details'} />
      <Text>ProductId: {id}</Text>
    </Wrapper>
  );
};

export default ProductId;
