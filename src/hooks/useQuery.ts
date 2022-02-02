import { AxiosRequestHeaders } from 'axios';
import { useQuery as useReactQuery, UseQueryResult } from 'react-query';
import { QueryResult } from '~/@types';
import api from '~/services/api';

interface Props {
  enabled?: boolean;
  headers?: AxiosRequestHeaders;
  params?: { [key: string]: unknown };
}

export default function useQuery<T>(
  key: string,
  url: string,
  { enabled = true, headers, params }: Props = {},
): QueryResult<T> {
  return useReactQuery<unknown, Error, UseQueryResult<T, Error>>(
    key,
    () => api.get(url, { headers, params }),
    {
      enabled,
    },
  );
}
