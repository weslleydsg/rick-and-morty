import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import useIsDarkMode from '~/hooks/useIsDarkMode';
import { darkTheme, defaultTheme } from '~/styles';

interface Props {
  children: JSX.Element;
}

const AppProvider = ({ children }: Props): JSX.Element => {
  const isDarkMode = useIsDarkMode();
  return (
    <PaperProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      {children}
    </PaperProvider>
  );
};

export default AppProvider;
