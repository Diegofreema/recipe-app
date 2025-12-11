import { Header } from '@/components/header';
import { Wrapper } from '@/components/wrapper';
import { Home } from '@/components/home';

import React from 'react';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <Wrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Header title="Home" />
        <Home />
      </ScrollView>
    </Wrapper>
  );
};

export default HomeScreen;
