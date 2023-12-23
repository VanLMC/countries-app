import React from 'react';
import {Container, Flag, Name} from './styles';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {Country} from '../../types/country';

interface CountryListItemProps {
  country: Country;
}

export default function CountryListItem({
  country,
}: CountryListItemProps): React.JSX.Element {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <Container
      onPress={() => navigation.navigate('CountryDetails', {country})}
      activeOpacity={0.8}>
      <Name>{country.name.common}</Name>
      <Flag
        source={{
          uri: country.flags.png,
        }}
      />
    </Container>
  );
}
