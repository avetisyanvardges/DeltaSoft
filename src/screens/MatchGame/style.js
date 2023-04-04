import {StyleSheet} from 'react-native';
import {normalize} from '../../assets/RootStyles/normalize';

const Styles = () => {
  return StyleSheet.create({
    image: {
      flex: 1,
    },
    pause: {
      maxWidth: normalize(40),
      maxHeight: normalize(40),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: normalize(100),
      width: '100%',
      marginBottom: normalize(20),
    },
    titleView: {
      width: normalize(120),
      height: normalize(60),
      padding: normalize(10),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      borderRadius: normalize(8),
      marginHorizontal: normalize(40),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      color: 'white',
      fontStyle: 'italic',
      fontSize: normalize(18),
      fontWeight: '500',
    },
    cards: {
      flexDirection: 'row',
    },
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
      marginRight: normalize(5),
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
  });
};

export {Styles};
