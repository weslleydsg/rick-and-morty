interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Episodes {
  info: Info;
  results: Episode[];
}
