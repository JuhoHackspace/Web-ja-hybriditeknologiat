import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import getToken from './getToken';

const UseAbortableAxios = (url) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const cancelTokenSource = useRef(null)
  const [error, setError] = useState(null)
  const {token} = getToken()
  
    const abortSearch = () => {
      if (cancelTokenSource.current) {
        cancelTokenSource.current.cancel('Operation canceled by the user.');
      }
    };

    const searchItems = async () => {
      if (!token || !url) {
        console.error('No token or artist available');
        return;
      }
      abortSearch(); // Abort any ongoing request before starting a new one
      cancelTokenSource.current = axios.CancelToken.source();
      setLoading(true);
      setError(null);
    try {
      const searchResponse = await axios.get(url, {
        headers: {
        'Authorization': `Bearer ${token}`
        },
        cancelToken: cancelTokenSource.current.token
      });
      setData(searchResponse.data)
      setLoading(false)
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message)
      } else {
        console.error('Error fetching data from Spotify API', error)
        setError(error)
      }
      setLoading(false)
    }
    };
   
    useEffect(() => {
      searchItems()
    }, [url]);

  return {data, loading, error}

}

export default UseAbortableAxios;