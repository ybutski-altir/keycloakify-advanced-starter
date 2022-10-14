import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React from 'react';

export const TextField = ({
  label = '',
  placeholder = '',
  onChange,
  value,
  InputProps,
  ...props
}: TextFieldProps) => {
  return (
    <MuiTextField
      fullWidth
      label={label}
      placeholder={placeholder}
      value={value}
      variant="outlined"
      onChange={onChange}
      InputProps={InputProps}
      {...props}
      data-testid={label}
    />
  );
};
