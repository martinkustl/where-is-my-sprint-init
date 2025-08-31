/**
 * @see https://tkdodo.eu/blog/effective-react-query-keys
 */
const appVersionsQueryKeys = {
  all: ['app-versions'] as const,
  list: () => [...appVersionsQueryKeys.all, 'list'] as const,
  detail: (id: string) =>
    [...appVersionsQueryKeys.list(), 'detail', id] as const,
};

export default appVersionsQueryKeys;
