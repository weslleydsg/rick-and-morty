import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Episode, FavoriteItem } from '~/@types';
import EpisodeCard, { ITEM_HEIGHT } from '~/components/EpisodeCard';
import { useEpisodesState } from '~/hooks/useEpisodesState';
import styles from './styles';

const FavoritesScreen = withTheme(({ theme }) => {
  const { favorites } = useEpisodesState();

  const keyExtractor = ({ id }: Episode) => `${id}`;

  const getItemLayout = (data: Episode[], index: number) => ({
    length: data.length,
    offset: ITEM_HEIGHT * index + theme.spacings.medium * index,
    index,
  });

  const renderItem = ({ item }: { item: FavoriteItem }) => {
    return <EpisodeCard id={item.id} episode={item.episode} name={item.name} />;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        style={styles.list}
        contentContainerStyle={{
          paddingTop: theme.spacings.large,
          paddingHorizontal: theme.spacings.large,
          paddingBottom: theme.spacings.tiny,
        }}
        data={Object.values(favorites)}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
});

export default FavoritesScreen;
