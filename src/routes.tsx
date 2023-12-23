import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Countries from './pages/countries';
import CountryDetails from './pages/country-details';
import {Country} from './types/country';

export type RootStackParamList = {
  Countries: undefined;
  CountryDetails: {country: Country};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes(): React.JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Countries" component={Countries} />
      <Stack.Screen name="CountryDetails" component={CountryDetails} />
    </Stack.Navigator>
  );
}
