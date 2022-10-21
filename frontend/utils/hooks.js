import { useRouter } from 'next/router';
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

export function useGetDesign(name, base, params = {}) {
  const {
    query: { slug },
  } = useRouter();
  const designName = name || slug;
  const qs = new URLSearchParams(params).toString();
  const qsparams = qs ? `?${qs}` : '';
  const { data, error } = useSWR(
    designName ? () => `${base}/${designName}${qsparams}` : null
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useDesign(name) {
  return useGetDesign(name, `/api/design`);
}

export function useSourceCode(name) {
  const {
    query: { f: file },
  } = useRouter();

  return useGetDesign(name, `/api/code`, {
    file,
  });
}
