import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FavoritesData } from '~/@types';
import { DeviceStorage } from '~/utils';

type Props = {
  children: React.ReactNode;
};

export type EpisodesStateProviderContextType = {
  favorites: FavoritesData;
  toggleFavorite(id: number): void;
};

const CartProviderContext = createContext(
  {} as EpisodesStateProviderContextType,
);

const EpisodesStateProvider = ({ children }: Props): JSX.Element => {
  const [favorites, setFavorites] = useState<FavoritesData>({});

  const storeFavoritesData = useCallback(
    async (data: FavoritesData) => {
      await DeviceStorage.storeData('favorites', data);
    },
    [favorites],
  );

  const toggleFavorite = useCallback(
    async (id: number) => {
      const isFavorite = favorites[id];
      if (isFavorite) {
        const { [id]: deleted, ...newFavoriteData } = favorites;
        setFavorites(newFavoriteData);
        storeFavoritesData(newFavoriteData);
      } else {
        const newFavoriteData = { ...favorites, [id]: true };
        setFavorites(newFavoriteData);
        storeFavoritesData(newFavoriteData);
      }
    },
    [favorites],
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
