import { useState, useEffect } from 'react';
import { tuplify } from '../tools/helper';

type UseFetchType = [
  response:Response | null | undefined,
  error:Error | null | undefined,
  isLoading:boolean,
];
// UseFetchType
export default function useFetch(request: RequestInfo, init?: RequestInit):UseFetchType {
  const [response, setResponse] = useState<null | Response>();
  const [error, setError] = useState<null | Error>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    (async () => {
      try {
        const rpd = await fetch(request, {
          ...init,
          signal: abortController.signal,
        });
        setResponse(await rpd?.json());
        setIsLoading(false);
      } catch (e:any) { //TODO:any
        // e is AbortError
        if (e.name === 'AbortError') {
          return;
        }
        setError(e);
        setIsLoading(false);
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [init, request]);
  return tuplify(response, error, isLoading);
}
