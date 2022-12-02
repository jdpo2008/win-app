import { useInfiniteQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../data/client/endpoints";
import client from "../data/client";

export function useProducts() {
  const { data, isLoading, error } = useInfiniteQuery<any, Error>(
    [API_ENDPOINTS.PRODUCTS],
    () => client.products.all()
  );

  return {
    data: data?.pages || [],
    isLoading,
    error,
  };
}
