import {StyleSheet} from 'react-native';
import {normalize} from '../../assets/RootStyles/normalize';
import {BackgroundColors, Colors} from '../../assets/RootStyles';

const Styles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#8e9ba7',
      height: normalize(160),
      width: normalize(160),
      margin: normalize(10),
      borderRadius: normalize(30),
      padding: normalize(10),
      alignItems: 'center',
    },
    image: {
      maxWidth: normalize(130),
      maxHeight: normalize(130),
    },
    text: {
      fontSize: normalize(13),
      color: BackgroundColors.blue,
    },
    content: {
      flex: 1,
      backgroundColor: BackgroundColors.blue,
      alignItems: 'center',
    },
    header: {
      color: '#fc9a3a',
      fontSize: normalize(21),
    },
  });
};

export {Styles};
