import React from 'react';
import { Header } from '../components/header';
import { SearchInput } from '../components/search-input';
import { Wrapper } from '../components/wrapper';

const Search = () => {
  return (
    <Wrapper>
      <Header title="Search Recipes" showIcon />
      <SearchInput />
    </Wrapper>
  );
};

export default Search;
