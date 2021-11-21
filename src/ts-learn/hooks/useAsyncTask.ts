import { ErrorInfo, useCallback, useState } from 'react';

type TStatus = 'IDLE' | 'PROCESSING' | 'ERROR' | 'SUCCESS';
type UseAsyncTaskType<T extends unknown[], R> = {
  run: (...arg: T) => Promise<R>;
  reset: () => void;
  message: string;
  status: TStatus;
};

function useAsyncTask<T extends unknown[], R = unknown>(
  task: (...arg: T) => Promise<R>
): UseAsyncTaskType<T, R> {
  const [status, setStatus] = useState<TStatus>('IDLE');
  const [message, setMessage] = useState('');
  const run = useCallback(
    async (...arg: T) => {
      try {
        const resp = await task(...arg);
        setStatus('SUCCESS');
        console.log('🐻🐻🐻', resp);
        return resp;
      } catch (e) {
        setStatus('ERROR');
        setMessage('业务捕获错误');
        throw new Error((<Error>e).toString());
      }
    },
    [task]
  );
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

// class Index{
//     public componentDidCatch(error: Error, errorInfo: ErrorInfo):void {
//         // 嵌入SDK
//         console.error('报告错误🧓', error.stack, errorInfo.componentStack);
//       }
// }
