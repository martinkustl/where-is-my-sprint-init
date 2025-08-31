import { useReducer, useCallback } from 'react';

const initialState = {
  loading: false,
  error: undefined,
  data: undefined,
};

type Action<T> =
  | { type: 'send' }
  | { type: 'response'; resData: T }
  | { type: 'error'; message: string };

type SimpleHttpState<T> = {
  loading: boolean;
  error?: Error;
  data?: T;
};

const httpReducer = <T>(
  httpState: SimpleHttpState<T>,
  action: Action<T>,
): SimpleHttpState<T> => {
  switch (action.type) {
    case 'send':
      return {
        loading: true,
        error: undefined,
        data: undefined,
      };
    case 'response':
      return {
        ...httpState,
        loading: false,
        data: action.resData,
      };
    case 'error':
      return {
        ...httpState,
        loading: false,
        error: {
          name: 'http-err',
          message: action.message,
        },
      };
    default:
      throw new Error('Should not be reached!');
  }
};

type SendRequestParams<T> = {
  url: string;
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'GET';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  onSuccess?: (data: T) => Promise<void>;
};

const useNaiveHttp = <ResData>() => {
  const [httpState, dispatchHttp] = useReducer(
    httpReducer<ResData>,
    initialState,
  );

  const sendRequest = useCallback(
    async ({ method, body, onSuccess, url }: SendRequestParams<ResData>) => {
      dispatchHttp({ type: 'send' });

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
          method,
          ...(body
            ? {
                body: JSON.stringify({ ...body }),
              }
            : {}),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const jsonRes = await res.json();

        if (!res.ok) {
          throw new Error('Failed to fetch data from server', jsonRes);
        }

        onSuccess?.(jsonRes);

        dispatchHttp({ type: 'response', resData: jsonRes });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        if (err && err.message) {
          dispatchHttp({
            type: 'error',
            message: err.message,
          });
        }
      }
    },
    [],
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest,
  };
};

export default useNaiveHttp;
