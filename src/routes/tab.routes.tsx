import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import { withTheme } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
import { BottomTabStacks } from '~/@types';
import FavoritesStack from './favorites.routes';
import HomeStack from './home.routes';

const Tab = createMaterialBottomTabNavigator<BottomTabStacks>();

const TabRoutes = withTheme(({ theme }) => {
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;
  const combinedTheme: Theme = {
    ...navigationTheme,
    ...theme,
    colors: {
      ...navigationTheme.colors,
      ...theme.colors,
    },
  };
  return (
    <NavigationContainer theme={combinedTheme}>
      <Tab.Navigator
        barStyle={{ backgroundColor: theme.colors.primary }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName: string;
            switch (route.name) {
              case 'HomeStack':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'FavoritesStack':
                iconName = focused ? 'heart' : 'heart-outline';
                break;
            }
            return <Icons name={iconName} color={color} size={22} />;
          },
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="FavoritesStack"
          component={FavoritesStack}
          options={{ tabBarLabel: 'Favorites' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
});

export default TabRoutes;
