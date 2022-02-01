import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
import styles from './styles';

const FavoritesScreen = withTheme(() => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Favorites</Text>
    </SafeAreaView>
  );
});

export default FavoritesScreen;
