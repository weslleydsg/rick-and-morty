import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeStack } from '~/@types';
import AppBar from '~/components/AppBar';
import Episode from '~/screens/Episode';
import Episodes from '~/screens/Episodes';

const Stack = createNativeStackNavigator<HomeStack>();

const StackScreen = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{ header: (props) => <AppBar {...props} /> }}>
      <Stack.Screen
        name="Episodes"
        component={Episodes}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  );
};

export default StackScreen;
