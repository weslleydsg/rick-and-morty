import {
  QueryObserverResult,
  RefetchOptions,
  UseQueryResult,
} from 'react-query';

export interface QueryResult<T> {
  isLoading: boolean;
  isFetching?: boolean;
  error: Error | null;
  data: UseQueryResult<T> | undefined;
  refetch(
    options?: RefetchOptions,
  ): Promise<QueryObserverResult<UseQueryResult<T, Error>, Error>>;
}
