export type FavoriteItem = {
  id: number;
  episode: string;
  name: string;
};

export type FavoritesData = {
  [id: number]: FavoriteItem;
};

export type DeviceStorageKeys = 'favorites';

export type DeviceStorageData = FavoritesData;
