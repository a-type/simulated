import React, { FC } from 'react';
import { useFormikContext } from 'formik';
import { Button, CircularProgress, ButtonProps } from '@material-ui/core';

export interface SubmitButtonProps extends ButtonProps {}

const SubmitButton: FC<SubmitButtonProps> = ({ children, ...rest }) => {
  const formState = useFormikContext();

  return (
    <Button
      {...rest}
      type="submit"
      disabled={
        !formState.isValid ||
        !formState.dirty ||
        formState.isSubmitting ||
        rest.disabled
      }
    >
      {formState.isSubmitting ? <CircularProgress /> : children}
    </Button>
  );
};

export default SubmitButton;
