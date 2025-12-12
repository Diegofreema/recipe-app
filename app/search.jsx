import React, { useState } from 'react';
import { Header } from '../components/header';
import { SearchInput } from '../components/search-input';
import { Wrapper } from '../components/wrapper';
import { SearchRecipes } from '../components/search-recipes';
import { useDebounce } from 'use-debounce';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [query] = useDebounce(searchQuery, 500);

  return (
    <Wrapper>
      <Header title="Search Recipes" showIcon />
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchRecipes query={query} />
    </Wrapper>
  );
};

export default Search;
