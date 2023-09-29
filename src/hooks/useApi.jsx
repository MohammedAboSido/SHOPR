import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [postedData, setPostedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getDataHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  const post = async (body) => {
    try {
      setIsLoading(true);
      const res = await axios.post(url, body);
      setPostedData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);

  return { data, isLoading, error, postedData, post };
};

export default useApi;
