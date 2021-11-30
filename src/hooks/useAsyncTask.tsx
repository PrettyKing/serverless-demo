import { useState, useCallback } from 'react';

type TStatus = 'IDLE' | 'PROCESSING' | 'ERROR' | 'SUCCESS';
type UseAsyncTaskType<T extends unknown[], R> = {
  run:(...arg: T) => Promise<R>,
  reset: () => void,
  message: string,
  status: TStatus,
};
function useAsyncTask<T extends unknown[], R = unknown>(
  task: (...args: T) => Promise<R>,
):UseAsyncTaskType<T, R> {
  const [status, setStatus] = useState<TStatus>('IDLE');
  const [message, setMessage] = useState('');
  const run = useCallback(async (...arg: T) => {
    console.log('🐻11111', arg);
    setStatus('PROCESSING');
    try {
      const resp = await task(...arg);
      setStatus('SUCCESS');
      console.log('🐻🐻🐻', resp);
      return resp;
    } catch (e:any) { //TODO:any
      setMessage(e?.response?.data?.error?.message || e.message);
      setStatus('ERROR');
      throw e;
    }
  }, [task]);
  const reset = useCallback(() => {
    setMessage('');
    setStatus('IDLE');
  }, []);
  return {
    run,
    reset,
    message,
    status,
  };
}
export default useAsyncTask;
