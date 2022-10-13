import React from 'react';
import { memo } from 'react';
import landingImg from '../../assets/img/landing.png';
import { useStyles } from './LandingImage.styles';

const ImageComponent = () => {
  const classes = useStyles();

  return <img src={landingImg} alt="Front Door Corporation" className={classes.image} />;
};

export const LandingImage = memo(ImageComponent);