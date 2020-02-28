import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

export default (error: Error | string) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!error) return;
    console.error(error);
    enqueueSnackbar(typeof error === 'string' ? error : error.message, {
      variant: 'error',
    });
  }, [error]);
};
