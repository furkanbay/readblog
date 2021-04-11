import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useFetch({ method, extent }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios[method](API_URL + extent)
      .then(function (response) {
        setResponse(response.data);
      })
      .catch(function (error) {
        setError(error);
      })
      .then(function () {
        setIsLoading(false);
      });
  }, [method, extent]);

  return { response, error, isLoading };
}
