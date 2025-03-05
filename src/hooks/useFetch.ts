import { useState, useEffect } from 'react';

type FetchState<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

export default function useFetch<T>(url: string): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error('Erro ao buscar dados');
          }
  
          const result = await response.json();
          setData(result);
        } catch (err: any) {
          setError(err.message || 'Erro desconhecido');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { data, error, loading };
}
  