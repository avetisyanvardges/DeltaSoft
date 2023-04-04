import {StyleSheet} from 'react-native';
import {normalize} from '../../assets/RootStyles/normalize';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    levelText: {
      fontSize: 20,
      margin: 10,
    },
    cardContainer: {
      width: normalize(100),
      height: normalize(120),
    },
    card: {
      width: normalize(100),
      height: normalize(120),
      backgroundColor: 'orange',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    // container: {
    //   width: normalize(100),
    //   height: normalize(120),
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   padding: normalize(20),
    //   borderRadius: normalize(8),
    //   shadowColor: '#000',
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
    //   elevation: 5,
    //   margin: normalize(10),
    // },
    image: {
      maxWidth: normalize(90),
      maxHeight: normalize(90),
    },
  });
};

export {Styles};
