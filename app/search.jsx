import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Wrapper } from '@/components/ui/wrapper';
import { HeaderTitle } from '@/components/ui/header-title';
import { SearchInput } from '@/components/ui/search-input';
import { SearchComponent } from '../components/search';
import { useFilterData } from '../hooks/use-filter-data';
import { Loading } from '@/components/ui/loading';

const Search = () => {
  const [name, setName] = useState('');
  const { loading, filteredData, data } = useFilterData(name);

  if (loading) {
    return <Loading />;
  }

  console.log({ data });

  return (
    <Wrapper>
      <HeaderTitle title="Search recipes" showBtn={true} />
      <SearchInput search={true} value={name} setValue={setName} />
      <SearchComponent data={filteredData} />
    </Wrapper>
  );
};

export default Search;
