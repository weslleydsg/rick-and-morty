import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FavoritesStack } from '~/@types';
import AppBar from '~/components/AppBar';
import Favorites from '~/screens/Favorites';

const Stack = createNativeStackNavigator<FavoritesStack>();

const StackScreen = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{ header: (props) => <AppBar {...props} /> }}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerTitle: 'Favorites' }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
