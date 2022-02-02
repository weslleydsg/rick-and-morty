import { Episode, QueryResult } from '~/@types';
import { Episodes } from '~/@types';
import useQuery from '~/hooks/useQuery';

export const GetEpisodes = (page: number): QueryResult<Episodes> => {
  const { isLoading, isFetching, data, error, refetch } = useQuery<Episodes>(
    'episodes',
    'episode',
    { enabled: false, params: { page } },
  );
  return { isLoading, isFetching, data, error, refetch };
};

export const GetEpisode = (id: number): QueryResult<Episode> => {
  const { isLoading, isFetching, data, error, refetch } = useQuery<Episode>(
    'episode',
    `episode/${id}`,
  );
  return { isLoading, isFetching, data, error, refetch };
};
