import { useState, useEffect } from 'react';
import axios from 'axios';

interface State {
  data: any;
  loading: boolean;
  error: string | unknown | null;
};

export const useFetchData = (url: string, options: any) => {
  const [state, setState] = useState<State>({
    data: [],
    loading: false,
    error: null,
  });

  const fetchData = async (): Promise<void> => {
    try {
      const data = await axios(url, options);
      setState({ data: data.data.items, loading: false, error: null });
    } catch (error) {
      setState({ data: [], loading: false, error });
    } finally {
      console.log('Fetching done!');
    }
  }

  useEffect( () => {
    setState({ data: [], loading: true, error: null });
    fetchData();
  }, [url, options]);

  return state;
};