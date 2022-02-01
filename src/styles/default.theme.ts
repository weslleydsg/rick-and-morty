import { DefaultTheme } from 'react-native-paper';
import { spacings } from './spacings';

export const defaultTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  spacings,
};
