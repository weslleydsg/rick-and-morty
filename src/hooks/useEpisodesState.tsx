import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FavoriteItem, FavoritesData } from '~/@types';
import { DeviceStorage } from '~/utils';

type Props = {
  children: JSX.Element;
};

export type EpisodesStateProviderContextType = {
  favorites: FavoritesData;
  toggleFavorite(data: FavoriteItem): void;
};

const CartProviderContext = createContext(
  {} as EpisodesStateProviderContextType,
);

const EpisodesStateProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<FavoritesData>({});

  const storeFavoritesData = useCallback(async (data: FavoritesData) => {
    await DeviceStorage.storeData('favorites', data);
  }, []);

  const toggleFavorite = useCallback(
    async (data: FavoriteItem) => {
      const isFavorite = favorites[data.id];
      if (isFavorite) {
        const { [data.id]: deleted, ...newFavoriteData } = favorites;
        setFavorites(newFavoriteData);
        storeFavoritesData(newFavoriteData);
      } else {
        const newFavoriteData = { ...favorites, [data.id]: data };
        setFavorites(newFavoriteData);
        storeFavoritesData(newFavoriteData);
      }
    },
    [favorites, storeFavoritesData],
  );

  useEffect(() => {
    async function getFavoritesData() {
      const favoriteStoredData = await DeviceStorage.getData<FavoritesData>(
        'favorites',
      );
      if (!favoriteStoredData) return;
      setFavorites(favoriteStoredData);
    }

    getFavoritesData();
  }, []);

  return (
    <CartProviderContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}>
      {children}
    </CartProviderContext.Provider>
  );
};

const useEpisodesState = (): EpisodesStateProviderContextType => {
  const context = useContext(CartProviderContext);
  if (!context) {
    throw new Error(
      'useEpisodesState must be used within an EpisodesStateProvider.',
    );
  }
  return context;
};

export { EpisodesStateProvider, useEpisodesState };
