import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Surface, useTheme } from 'react-native-paper';

interface Props {
  id: number;
  episode: string;
  name: string;
  onPress(id: number): void;
}

export const ITEM_HEIGHT = 72;

const EpisodeCard = ({ id, episode, name, onPress }: Props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={{ marginBottom: theme.spacings.medium }}
      onPress={() => onPress(id)}>
      <Surface>
        <Card.Title title={episode} subtitle={name} />
      </Surface>
    </TouchableOpacity>
  );
};

export default memo(EpisodeCard);
