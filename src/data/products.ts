import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { API_ENDPOINTS } from "./client/endpoints";
import client from "./client";
import { PaginatorRequest, ProductPaginator } from "@interfaces/index";

export function useProducts(
  options?: Partial<PaginatorRequest>,
  config?: UseInfiniteQueryOptions<ProductPaginator, Error>
) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<ProductPaginator, Error>(
    [API_ENDPOINTS.PRODUCTOS, options],
    () => client.products.all(options),
    {
      ...config,
    }
  );
  function handleLoadMore() {
    fetchNextPage();
  }
  return {
    products: data?.pages[0] || null,
    isLoading,
    error,
    hasNextPage,
    isFetching,
    isLoadingMore: isFetchingNextPage,
    loadMore: handleLoadMore,
  };
}
