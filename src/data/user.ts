import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "./client/endpoints";
import client from "./client";
import {
  PaginatorRequest,
  ProductPaginator,
  UserPaginator,
} from "@interfaces/index";

export function useUser(options?: Partial<PaginatorRequest>) {
  const { data, isLoading, error, isFetching } = useQuery<UserPaginator, Error>(
    [API_ENDPOINTS.USER_ALL, options],
    () => client.user.all(options)
  );

  return {
    result: data || { data: [] },
    isLoading,
    error,
    isFetching,
  };
}
