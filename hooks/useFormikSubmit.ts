import { FormikHelpers } from 'formik';
import { useCallback } from 'react';

export default <V>(handleSubmit: (values: V) => Promise<any> | any) => {
  const handler = useCallback(
    async (values: V, formik: FormikHelpers<V>) => {
      try {
        formik.setSubmitting(true);
        await handleSubmit(values);
      } catch (err) {
        console.error(err);
      } finally {
        formik.setSubmitting(false);
      }
    },
    [handleSubmit],
  );
  return handler;
};
