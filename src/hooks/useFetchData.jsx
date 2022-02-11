import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (url, options) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect( async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const data = await axios(url, options);
      setState({ data: data.data.items, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error });
    } finally {
      console.log('Fetching done!');
    }
  }, [url, options]);

  return state;
};