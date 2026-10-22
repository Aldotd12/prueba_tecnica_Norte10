export const useApi = () => {
  const config = useRuntimeConfig();
  const apiKey = config.public.apiKey as string;

  const fetchWithAuth = (url: string, options: Record<string, any> = {}) => {
    return $fetch(`http://localhost:3000/api${url}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        apikey: apiKey,
      },
    });
  };

  return { fetchWithAuth };
};