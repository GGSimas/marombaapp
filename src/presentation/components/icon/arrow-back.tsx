import Svg, { Path } from 'react-native-svg';
import { IconBaseProps } from './types';

export function ArrowBack({
  size = 16,
  color = '#fff',
}: Readonly<IconBaseProps>) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 15L1 8L8 1M15 8H1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
