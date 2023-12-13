export const useApi = (request: string, opts: Object) => {
  const config = useRuntimeConfig();

  return useFetch(request, {
    baseURL: config.public.baseURL,
    ...opts,
  });
};
