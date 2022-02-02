export type BottomTabStacks = {
  HomeStack?: {
    initial: boolean;
    screen: keyof HomeStack;
    params?: HomeStack[keyof HomeStack];
  };
  FavoritesStack: undefined;
  Favorites: never;
};

export type HomeStack = {
  Episodes: undefined;
  Episode: { id: number };
  HomeStack: never;
  FavoritesStack: never;
};

export type FavoritesStack = {
  Favorites: undefined;
  HomeStack: never;
  FavoritesStack: never;
};
