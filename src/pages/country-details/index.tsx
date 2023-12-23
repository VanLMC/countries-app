import React from 'react';
import WebView from 'react-native-webview';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';
import {Block, Container, Flag, Section, Text} from './styles';

type CountryDetailsRouteProp = RouteProp<RootStackParamList, 'CountryDetails'>;

interface CountryDetailsProps {
  route: CountryDetailsRouteProp;
}

export default function CountryDetails({
  route,
}: CountryDetailsProps): React.JSX.Element {
  const {country} = route.params;

  return (
    <Container>
      <Section>
        <Flag
          source={{
            uri: country.flags.png,
          }}
        />
        <Block>
          <Text numberOfLines={2}>Name: {country.name.official}</Text>
          <Text>Region: {country.region}</Text>
          <Text>Subregion: {country.subregion}</Text>
        </Block>
      </Section>

      <WebView
        source={{uri: country.maps.googleMaps}}
        style={{backgroundColor: '#1a1a1a'}}
      />
    </Container>
  );
}
