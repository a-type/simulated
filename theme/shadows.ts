import colors from './colors';

type Shadows = [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export const generateShadows = (): Shadows =>
  new Array(25).fill(null).map((_, idx) => {
    if (idx === 0) return 'none';
    return `0 ${idx * 5}px ${idx * 10}px rgba(${colors.blackRgb[0]}, ${
      colors.blackRgb[1]
    }, ${colors.blackRgb[2]}, 0.025), 0 ${idx * 15}px ${idx * 40}px rgba(${
      colors.mediumRgb[0]
    }, ${colors.mediumRgb[1]}, ${colors.mediumRgb[2]}, 0.2)`;
  }) as Shadows;
