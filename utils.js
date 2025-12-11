import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');

const BASE_WIDTH = 375;

export const scaleFontSize = (size) => {
  const scale = width / BASE_WIDTH;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const trimText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
