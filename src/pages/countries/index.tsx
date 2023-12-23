import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import {debounce} from 'lodash';
import CountryListItem from '../../components/country-list-item';
import {API_URL} from '../../constants';
import {Country} from '../../types/country';
import {Container, Input} from './styles';

const fetchCountries = async (searchTerm?: string) => {
  let data;

  if (!searchTerm) {
    const response = await fetch(`${API_URL}/all`);
    data = await response.json();
    return data;
  }

  const response = await fetch(`${API_URL}/name/${searchTerm}`);
  data = await response.json();

  return data;
};

export default function Countries(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  //treat errors
  const {
    data: countries,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ['countries', searchTerm],
    queryFn: () => fetchCountries(searchTerm),
    keepPreviousData: true,
  });

  const debouncedSetSearchTerm = debounce(text => {
    setSearchTerm(text);
  }, 500);

  return (
    <Container>
      <Input
        placeholder="Search by country name"
        onChangeText={text => debouncedSetSearchTerm(text)}
      />
      {isSuccess && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={refetch} />
          }
          data={countries}
          renderItem={({item}: {item: Country}) => (
            <CountryListItem country={item} />
          )}
          keyExtractor={item => item.name.common}
        />
      )}

      {isLoading && <ActivityIndicator size="large" color="#fff" />}
    </Container>
  );
}
