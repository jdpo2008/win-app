import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "./client/endpoints";
import client from "./client";
import { InformationPaginator, PaginatorRequest } from "@interfaces/index";

export function useInformations(options?: Partial<PaginatorRequest>) {
  const { data, isLoading, error, isFetching } = useQuery<
    InformationPaginator,
    Error
  >([API_ENDPOINTS.INFORMATION, options], () =>
    client.informacion.all(options)
  );

  return {
    result: data || null,
    isLoading,
    error,
    isFetching,
  };
}
