import React, { FC } from 'react';
import {
  makeStyles,
  Theme,
  TextField as MuiTextField,
} from '@material-ui/core';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField/TextField';
import { useField, FieldConfig } from 'fielder';
import clsx from 'clsx';

export type TextFieldProps = MuiTextFieldProps & FieldConfig;

const useStyles = makeStyles<Theme, TextFieldProps>(theme => ({}));

const TextField: FC<TextFieldProps> = props => {
  const { name, validate, helperText, className, ...rest } = props;
  const classes = useStyles(props);

  const [fieldProps, fieldMeta] = useField({
    name,
    validate,
  });

  return (
    <MuiTextField
      {...fieldProps}
      error={!!fieldMeta.error}
      helperText={fieldMeta.error || helperText}
      className={clsx(classes.root, className)}
      {...rest}
    />
  );
};

export default TextField;
