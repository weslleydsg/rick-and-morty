import { DarkTheme } from 'react-native-paper';
import { spacings } from './spacings';

export const darkTheme: ReactNativePaper.Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#34863b',
    notification: '#a1ded5',
    favorite: '#fa2d2d',
  },
  spacings,
};
