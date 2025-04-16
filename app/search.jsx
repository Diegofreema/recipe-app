import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Wrapper } from '@/components/ui/wrapper';
import { HeaderTitle } from '@/components/ui/header-title';
import { SearchInput } from '@/components/ui/search-input';
const Search = () => {
  return (
    <Wrapper>
      <HeaderTitle title="Search recipes" showBtn={true} />
      <SearchInput search={true} />
    </Wrapper>
  );
};

export default Search;
