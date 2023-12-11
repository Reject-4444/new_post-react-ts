import { useState } from 'react';

type CallbackType = (par?: string) => Promise<void>;
type FetchingReturnType = [CallbackType, boolean, string];

export const useFetching = (callback: CallbackType): FetchingReturnType => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetching = async (ttn?: string) => {
    try {
      setIsLoading(true);
      await callback(ttn);
    } catch (e) {
      if (e instanceof Error) {
        setIsError(e.message);
      } else {
        setIsError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, isError];
};
