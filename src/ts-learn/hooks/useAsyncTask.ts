import { useCallback, useState } from 'react';

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
                console.log('π»π»π»', resp);
                return resp;
            } catch (e) {
                setStatus('ERROR');
                setMessage('δΈε‘ζθ·ιθ――');
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
//         // ε΅ε₯SDK
//         console.error('ζ₯ειθ――π§', error.stack, errorInfo.componentStack);
//       }
// }
