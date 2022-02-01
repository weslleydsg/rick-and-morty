import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import useIsDarkMode from '~/hooks/useIsDarkMode';
import { darkTheme, defaultTheme } from '~/styles';

interface Props {
  children: JSX.Element;
}

const queryClient = new QueryClient();

const AppProvider = ({ children }: Props): JSX.Element => {
  const isDarkMode = useIsDarkMode();
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={isDarkMode ? darkTheme : defaultTheme}>
        {children}
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
