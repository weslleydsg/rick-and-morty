import React from 'react';
import { Platform, StatusBar, UIManager } from 'react-native';
import AppProvider from '~/providers/AppProvider';
import Routes from '~/routes';
import useIsDarkMode from './hooks/useIsDarkMode';

const App = () => {
  const isDarkMode = useIsDarkMode();
  StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
  if (Platform.OS === 'android') {
    Platform.Version >= 23 &&
      StatusBar.setBackgroundColor(isDarkMode ? 'gray' : 'white');
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
