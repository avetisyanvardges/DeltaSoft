import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {normalize} from '../../../assets/RootStyles/normalize';

const DiamondIcon = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(80)}
      height={width || normalize(80)}
      viewBox="0 0 64 64">
      <Path
        d="M5.04 25.35c.01.27.12.53.3.73L31.3 52.85c.15.15.35.24.56.26h.3c.21-.03.4-.12.55-.26l25.96-26.77c.19-.2.31-.45.34-.73l-26.74-5.09-27.23 5.09z"
        fill={color}
      />
      <Path
        d="M41.46 25.35H23.04l8.8 27.76c.1.02.2.02.3 0l9.31-27.76zM15.47 11.07c-.28.14-.53.35-.72.6L5.24 24.53c-.16.24-.23.53-.2.81h53.95c.03-.29-.05-.59-.22-.83l-9.08-12.83c-.18-.26-.42-.46-.7-.61H15.47z"
        fill={color}
      />
      <Path d="M32.23 10.86l-9.18 14.48h18.41l-9.23-14.48z" fill={color} />
      <Path
        d="M32.23 10.86l9.23 14.48 7.53-14.26c-.28-.14-.59-.22-.9-.22H32.23z"
        fill={color}
      />
      <Path
        d="M16.37 10.86c-.31 0-.62.07-.9.21l7.58 14.27 9.18-14.48H16.37z"
        fill={color}
      />
      <Path d="M50.51 11.11a2.972 2.972 0 00-2.42-1.25H16.37c-.95 0-1.85.46-2.42 1.22L4.43 23.94c-.64.87-.56 2.06.19 2.83l25.95 26.77c.74.76 1.97.85 2.85 0l25.95-26.77c.74-.77.84-1.96.22-2.83l-9.08-12.83zM40.07 26.35l-8.05 24-7.61-24h15.66zm-15.21-2l7.37-11.62 7.4 11.62H24.86zm9.19-12.49h13.39l-6.07 11.5-7.32-11.5zm-10.93 11.5l-6.1-11.5h13.39l-7.29 11.5zm6.64 26.47L6.99 26.35h15.32l7.45 23.48zm12.42-23.48H57l-22.67 23.4 7.85-23.4zm.94-2l6.11-11.58 8.2 11.58H43.12zm-27.9-11.62l6.17 11.62H6.62l8.6-11.62z" />
    </Svg>
  );
};

export {DiamondIcon};