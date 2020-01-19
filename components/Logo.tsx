import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';

export interface LogoProps {
  component?: any;
  className?: string;
  backdropClassName?: string;
}

const WIDTH = 100;
const HEIGHT = 20;
const FONT_SIZE = HEIGHT / 1.7;
const LOGO_TEXT = 'SIMULATED';

const useStyles = makeStyles<Theme, LogoProps>(theme => ({
  root: {
    height: 32,
  },
  box: {
    //theme.palette.background.default,
    fill: 'black',
  },
  backdrop: {},
  text: {
    fontWeight: 'bolder',
    fontFamily: '"Plaster", "Roboto", "Open Sans", sans-serif',
  },
}));

const Logo: FC<LogoProps> = props => {
  const { component: C = 'div', className, backdropClassName } = props;
  const classes = useStyles(props);

  return (
    <svg
      className={clsx(classes.root, className)}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <mask id="text-mask">
          <rect width={WIDTH} height={HEIGHT} fill="#ffffff" />
          <text
            transform={`translate(${WIDTH / 2}, ${HEIGHT * (2 / 3)})`}
            text-anchor="middle"
            fontSize={FONT_SIZE}
            fontFamily="Plaster"
            fill="#000000"
          >
            {LOGO_TEXT}
          </text>
        </mask>
      </defs>
      <rect
        width={WIDTH}
        height={HEIGHT}
        className={clsx(classes.backdrop, backdropClassName)}
      />
      <g style={{ mask: 'url("#text-mask")' }}>
        <rect width={WIDTH} height={HEIGHT} className={classes.box} />
      </g>
      <text
        transform={`translate(${WIDTH / 2}, ${HEIGHT * (2 / 3)})`}
        text-anchor="middle"
        fontSize={FONT_SIZE}
        fontFamily="Plaster"
        stroke="#ffffff"
        fill="transparent"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      >
        {LOGO_TEXT}
      </text>
    </svg>
  );
};

export default Logo;
