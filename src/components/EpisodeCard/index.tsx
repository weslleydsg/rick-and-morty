import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Card, Surface, useTheme } from 'react-native-paper';
import { useEpisodesState } from '~/hooks/useEpisodesState';

interface Props {
  id: number;
  episode: string;
  name: string;
  onPress(id: number): void;
}

export const ITEM_HEIGHT = 72;

const EpisodeCard = ({ id, episode, name, onPress }: Props) => {
  const theme = useTheme();
  const { favorites, toggleFavorite } = useEpisodesState();
  return (
    <TouchableOpacity
      style={{ marginBottom: theme.spacings.medium }}
      onPress={() => onPress(id)}>
      <Surface>
        <Card.Title
          title={episode}
          subtitle={name}
          left={(props) => (
            <TouchableOpacity
              onPress={() => toggleFavorite({ id, episode, name })}>
              <Avatar.Icon
                {...props}
                icon="heart"
                style={{ backgroundColor: theme.colors.onSurface }}
                color={favorites[id] ? theme.colors.favorite : undefined}
              />
            </TouchableOpacity>
          )}
        />
      </Surface>
    </TouchableOpacity>
  );
};

export default memo(EpisodeCard);
