import React, { FC, ReactNode } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core';
import clsx from 'clsx';

export interface LogoProps {
  className?: string;
  backdropClassName?: string;
  children?: ReactNode;
}

const WIDTH = 110;
const HEIGHT = 20;
const FONT_SIZE = HEIGHT / 1.2;
const LOGO_TEXT = 'SIMULATED';

const useStyles = makeStyles<Theme, LogoProps>(theme => ({
  root: {
    height: 32,
  },
  box: {
    //theme.palette.background.default,
    fill: theme.palette.common.black,
  },
  backdrop: {
    fill: theme.palette.secondary.main,
  },
  text: {
    fontWeight: 900,
    fontFamily: '"Source Code Pro", monospace',
  },
}));

const commonTextProps = {
  y: HEIGHT / 2 + 1,
  x: WIDTH / 2,
  textAnchor: 'middle' as const,
  alignmentBaseline: 'middle' as const,
  fontSize: FONT_SIZE,
  fontWeight: 900,
  fontFamily: 'Source Code Pro',
};

const Logo: FC<LogoProps> = props => {
  const { className, backdropClassName } = props;
  const classes = useStyles(props);
  const theme = useTheme();

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
            {...commonTextProps}
            fill="#000000"
            strokeWidth={1}
            stroke="#000000"
          >
            {LOGO_TEXT}
          </text>
        </mask>
      </defs>
      <rect
        width={WIDTH}
        height={HEIGHT}
        className={clsx(classes.backdrop, backdropClassName)}
      >
        {props.children}
      </rect>
      <g style={{ mask: 'url("#text-mask")' }}>
        <rect width={WIDTH} height={HEIGHT} className={classes.box} />
      </g>
      <text
        {...commonTextProps}
        stroke={theme.palette.common.white}
        fill="transparent"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      >
        {LOGO_TEXT}
      </text>
      <rect
        width={WIDTH}
        height={HEIGHT}
        vectorEffect="non-scaling-stroke"
        fill="transparent"
        stroke={theme.palette.common.white}
        strokeWidth={1}
      />
    </svg>
  );
};

export default Logo;
