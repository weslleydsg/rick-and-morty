import { DefaultTheme } from 'react-native-paper';
import { spacings } from './spacings';

export const defaultTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#34863b',
    notification: '#a1ded5',
    favorite: '#fa2d2d',
  },
  spacings,
};
