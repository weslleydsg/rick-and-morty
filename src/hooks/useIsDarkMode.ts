import { useColorScheme } from 'react-native';

const useIsDarkMode = (): boolean => {
  return useColorScheme() === 'dark';
};

export default useIsDarkMode;
