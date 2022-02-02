import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabRoutes from './tab.routes';

const Routes = () => (
  <SafeAreaProvider style={{ position: 'relative' }}>
    <TabRoutes />
  </SafeAreaProvider>
);

export default Routes;
