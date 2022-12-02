import { useInfiniteQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../data/client/endpoints";
import client from "../data/client";

export function useServices() {
  const { data, isLoading, error } = useInfiniteQuery<any, Error>(
    [API_ENDPOINTS.SERVICES],
    () => client.services.all()
  );

  return {
    data: data?.pages || [],
    isLoading,
    error,
  };
}
