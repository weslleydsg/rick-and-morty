import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Button, Title, withTheme } from 'react-native-paper';
import { Episode, HomeStack } from '~/@types';
import EpisodeCard, { ITEM_HEIGHT } from '~/components/EpisodeCard';
import Loading from '~/components/Loading';
import { GetEpisodes } from '~/services/episode';
import styles from './styles';

const EpisodesScreen = withTheme(({ theme }) => {
  const { navigate } = useNavigation<NavigationProp<HomeStack>>();
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<Episode[]>([]);
  const { isLoading, isFetching, data, error, refetch } = GetEpisodes(page);

  const onEpisodeCardPress = useCallback(
    (id: number) => {
      navigate('Episode', { id });
    },
    [navigate],
  );

  useEffect(() => {
    async function loadPage() {
      const { data: responseData } = await refetch();
      const results = responseData?.data?.results;
      if (!results) return;
      setItems((previousValue) => {
        if (!previousValue) return results;
        return [...previousValue, ...results];
      });
    }

    loadPage();
  }, [page, refetch]);

  const keyExtractor = ({ id }: Episode) => `${id}`;

  const getItemLayout = (data: Episode[], index: number) => ({
    length: data.length,
    offset: ITEM_HEIGHT * index + theme.spacings.medium * index,
    index,
  });

  const onEndReached = () => {
    setPage((previousValue) => {
      const lastPage = data?.data?.info?.pages;
      if (!lastPage || previousValue >= lastPage) return previousValue;
      return previousValue + 1;
    });
  };

  const renderItem = ({ item }: { item: Episode }) => {
    return (
      <EpisodeCard
        id={item.id}
        episode={item.episode}
        name={item.name}
        onPress={onEpisodeCardPress}
      />
    );
  };

  if (isLoading) return <Loading />;
  if (!data && error) {
    if (isFetching) return <Loading />;
    return (
      <SafeAreaView style={styles.screen}>
        <Title style={{ marginBottom: theme.spacings.large }}>
          Unable to get data from api.
        </Title>
        <Button mode="outlined" onPress={refetch}>
          Try again
        </Button>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        style={styles.list}
        contentContainerStyle={{
          paddingTop: theme.spacings.large,
          paddingHorizontal: theme.spacings.large,
          paddingBottom: theme.spacings.tiny,
        }}
        data={items}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        onEndReachedThreshold={0.2}
        onEndReached={onEndReached}
        renderItem={renderItem}
        ListFooterComponent={isFetching ? <Loading /> : null}
      />
    </SafeAreaView>
  );
});

export default EpisodesScreen;
