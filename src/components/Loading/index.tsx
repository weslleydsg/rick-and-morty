import React, { memo } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import styles from './styles';

const Loading = () => {
  const theme = useTheme();
  return (
    <View style={[styles.container, { marginVertical: theme.spacings.large }]}>
      <ActivityIndicator />
    </View>
  );
};

export default memo(Loading);
