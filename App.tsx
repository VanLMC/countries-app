import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Routes from './src/routes';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
