import {StyleSheet} from 'react-native';
import {BackgroundColors, Colors, Shadow, Sizes} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/DeviceInfo';

const Styles = () => {
  return StyleSheet.create({
    listContainer: {
      padding: 10,
      paddingBottom: 20,
      backgroundColor: BackgroundColors.blue,
    },

    itemContainer: {
      height: Sizes(150),
      backgroundColor: BackgroundColors.blue,
      ...Shadow,
      shadowColor: 'rgba(255,255,255,.6)',
      justifyContent: 'flex-end',
      borderRadius: 12,
    },
    imageContainer: {
      justifyContent: 'center',
    },
    image: {
      width: deviceInfo.deviceWidth - Sizes(32),
      height: Sizes(150),
      borderRadius: Sizes(10),
    },
    infoContainer: {
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,.5)',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
    title: {
      fontWeight: 'bold',
      color: '#F4EFF4',
      margin: Sizes(5),
    },
    separator: {
      height: Sizes(10),
    },
  });
};

export {Styles};
