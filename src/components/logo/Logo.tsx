import React from 'react';
import clsx from 'clsx';
import { Typography } from '@mui/material';

import LogoIcon from './LogoIcon';

import { ILogoProps } from './types';
import { useStyles } from './Logo.styles';

export const Logo = ({ className }: ILogoProps) => {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [className ?? '']: true,
        [classes?.container]: true,
      })}
    >
      <LogoIcon className={classes.logoIcon} />
      <Typography variant="h4" component="h1" className={classes.text}>
        FRONTDOOR
      </Typography>
    </div>
  );
};
