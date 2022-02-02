import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Button,
  Card,
  Paragraph,
  Snackbar,
  Title,
  withTheme,
} from 'react-native-paper';
import { HomeStack } from '~/@types';
import Loading from '~/components/Loading';
import { useEpisodesState } from '~/hooks/useEpisodesState';
import { GetEpisode } from '~/services/episode';
import styles from './styles';

const EpisodeScreen = withTheme(({ theme }) => {
  const { setOptions } = useNavigation<NavigationProp<HomeStack>>();
  const { params } = useRoute<RouteProp<HomeStack, 'Episode'>>();
  const { favorites, toggleFavorite } = useEpisodesState();
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const { isLoading, isFetching, data, error, refetch } = GetEpisode(params.id);
  const episodeData = data?.data;

  function onSnackbarOpen() {
    setSnackbarVisible(true);
  }

  function onSnackbarDismiss() {
    setSnackbarVisible(false);
  }

  function toggleEpisodeFavorite() {
    if (!episodeData) return;
    toggleFavorite({
      id: episodeData.id,
      episode: episodeData.episode,
      name: episodeData.name,
    });
  }

  function onToggleFavorite() {
    toggleEpisodeFavorite();
    onSnackbarOpen();
  }

  useLayoutEffect(() => {
    setOptions({
      headerTitle: episodeData?.episode,
    });
  }, [episodeData?.episode]);

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
    <SafeAreaView style={[styles.screen, { marginTop: theme.spacings.large }]}>
      <Card style={{ width: '100%' }}>
        <Card.Content>
          <Title>{episodeData?.name}</Title>
          <Paragraph>{`Air Date: ${episodeData?.air_date}`}</Paragraph>
        </Card.Content>
        <Card.Actions
          style={[
            styles.cardAction,
            {
              marginTop: theme.spacings.huge,
              marginBottom: theme.spacings.medium,
            },
          ]}>
          <Button
            mode={favorites[params.id] ? 'contained' : 'outlined'}
            icon="heart"
            onPress={onToggleFavorite}>
            Favorite
          </Button>
        </Card.Actions>
      </Card>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={onSnackbarDismiss}
        action={{
          label: 'Undo',
          onPress: toggleEpisodeFavorite,
        }}>
        {`${favorites[params.id] ? 'Added' : 'Removed'} ${
          episodeData?.episode
        } to favorites list`}
      </Snackbar>
    </SafeAreaView>
  );
});

export default EpisodeScreen;
