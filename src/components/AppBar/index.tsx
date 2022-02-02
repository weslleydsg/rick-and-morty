import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomAppBar = ({
  navigation,
  back,
  options,
}: NativeStackHeaderProps) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={options.headerTitle} />
    </Appbar.Header>
  );
};

export default CustomAppBar;
