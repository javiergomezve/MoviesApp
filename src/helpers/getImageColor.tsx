import {getColors} from 'react-native-image-colors';

const getImageColor = async (uri: string) => {
  let primary;
  let secondary;

  const colors = await getColors(uri, {});

  if (colors.platform === 'android') {
    primary = colors.dominant;
    secondary = colors.average;
  } else if (colors.platform === 'ios') {
    primary = colors.primary;
    secondary = colors.secondary;
  }

  return [primary, secondary];
};

export default getImageColor;
