import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../../assets/RootStyles';
import {normalize} from '../../../assets/RootStyles/normalize';

const styles = StyleSheet.create({
  infoContainerText: {
    marginVertical: Sizes(3),
    marginHorizontal: normalize(10),
    color: '#848482',
    fontSize: Sizes(14),
    textAlign: 'left',
  },
  infoContainerName: {
    marginTop: Sizes(10),
    marginHorizontal: normalize(10),
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: Sizes(18),
    textAlign: 'left',
  },
  biography: {
    borderRadius: Sizes(15),
    width: '100%',
    height: Sizes(420),
    marginTop: Sizes(30),
    backgroundColor: Colors.white,
  },
  flagTitle: {
    marginLeft: Sizes(10),
    fontWeight: 'bold',
    color: '#8e969e',
    fontSize: Sizes(16),
  },
  imageFlag: {
    width: '100%',
    height: '100%',
    marginBottom: Sizes(15),
  },
  imageFlagContainer: {
    width: '30%',
    height: '50%',
    overflow: 'hidden',
  },
  sportImage: {
    width: Sizes(30),
    height: Sizes(30),
    resizeMode: 'contain',
  },
  imgBlock: {
    width: '100%',
    height: Sizes(280),
    backgroundColor: Colors.white,
    borderRadius: Sizes(15),
  },
  img: {
    borderTopLeftRadius: Sizes(15),
    borderTopRightRadius: Sizes(15),
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  titleBlack: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleInfoBlack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.33333%',
    height: '80%',
    borderRightWidth: 1,
    borderRightColor: '#8e969e',
  },
  imgBg: {
    width: '100%',
    height: '80%',
  },
  container: {
    flex: 1,
    padding: Sizes(10),
  },
});

export default styles;
