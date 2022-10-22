import { useRouter } from 'next/router';
import { isCodes, fileExt } from '@helpers';
import useSWR from 'swr';

export function useUpdateQuery() {
  const router = useRouter();

  return function updateQuery(newQuery) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        ...newQuery,
      },
    });
  };
}

export function useDesigns() {
  const { data, error } = useSWR('/api/designs');

  return {
    data,
    loadingDesigns: !error && !data,
    isError: error,
  };
}

export function useGetDesign(name, base, params = {}, kill = false) {
  const {
    query: { slug },
  } = useRouter();
  const designName = name || slug;
  const qs = new URLSearchParams(params).toString();
  const qsparams = qs ? `?${qs}` : '';

  const { data, error } = useSWR(
    designName && !kill ? () => `${base}/${designName}${qsparams}` : null
  );

  return {
    data,
    isLoading: designName && !kill && !error && !data,
    isError: error,
  };
}

export function useDesign(name) {
  return useGetDesign(name, `/api/design`);
}

export function useSourceCode(file) {
  const isFileCode = isCodes(fileExt(file));

  return useGetDesign(null, `/api/code`, { file }, !isFileCode);
}
