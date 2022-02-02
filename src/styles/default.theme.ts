import { DefaultTheme } from 'react-native-paper';
import { spacings } from './spacings';

export const defaultTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    favorite: '#fa2d2d',
  },
  spacings,
};
