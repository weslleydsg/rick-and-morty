import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
import styles from './styles';

const Episodes = withTheme(() => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Episodes</Text>
    </SafeAreaView>
  );
});

export default Episodes;
