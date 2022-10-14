import { useState } from 'react';
import { InputAdornment, IconButton, TextFieldProps } from '@mui/material';

import { Eye } from './Eye';
import { EyeSlash } from './EyeSlash';
import { TextField } from '../textField/TextField';

import { useStyles } from './PasswordField.styles';
import React from 'react';

export const PasswordField = ({
  label = '',
  placeholder = '',
  onChange,
  value,
  ...props
}: TextFieldProps) => {
  const classes = useStyles();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!isPasswordVisible);

  return (
    <TextField
      fullWidth
      label={label as string}
      value={value}
      variant="outlined"
      onChange={onChange}
      type={isPasswordVisible ? 'text' : 'password'}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={'toggleVisibility'}
              onClick={togglePasswordVisibility}
              className={classes.icon}
              data-testid="passwordToggleVisibility"
            >
              {isPasswordVisible ? <EyeSlash /> : <Eye />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
