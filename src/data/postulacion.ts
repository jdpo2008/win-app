import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { API_ENDPOINTS } from "./client/endpoints";
import client from "./client";
import { PaginatorRequest, ProductPaginator } from "@interfaces/index";

export function usePostulations(options?: Partial<PaginatorRequest>) {
  const { data, isLoading, error, isFetching } = useQuery<any, Error>(
    [API_ENDPOINTS.POSTULATION, options],
    () => client.postulacion.all(options)
  );

  return {
    products: data?.pages[0] || null,
    isLoading,
    error,
    isFetching,
  };
}
