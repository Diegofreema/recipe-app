import { Header } from '@/components/header';
import { Wrapper } from '@/components/wrapper';
import { Home } from '@/components/home';

import React from 'react';

const HomeScreen = () => {
  return (
    <Wrapper>
      <Header title="Home" />
      <Home />
    </Wrapper>
  );
};

export default HomeScreen;
