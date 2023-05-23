import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {normalize} from '../../../assets/RootStyles/normalize';
import {BackgroundColors} from '../../../assets/RootStyles';

const ArrowLeftIcon = ({width, height, color}) => {
  return (
    <Svg
      width={width || normalize(24)}
      height={height || normalize(24)}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
        stroke={color || BackgroundColors.blue}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {ArrowLeftIcon};
