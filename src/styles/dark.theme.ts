import { DarkTheme } from 'react-native-paper';
import { spacings } from './spacings';

export const darkTheme: ReactNativePaper.Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
  spacings,
};
