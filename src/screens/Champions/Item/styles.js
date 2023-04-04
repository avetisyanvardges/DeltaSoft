import {StyleSheet} from 'react-native';
import {
  BackgroundColors,
  Colors,
  Shadow,
  Sizes,
} from '../../../assets/RootStyles';
import {normalize} from '../../../assets/RootStyles/normalize';

const styles = StyleSheet.create({
  infoContainerText: {
    marginHorizontal: normalize(5),
    color: '#8e969e',
    fontSize: Sizes(14),
    textAlign: 'left',
  },
  infoContainerName: {
    marginHorizontal: normalize(5),
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: Sizes(18),
    textAlign: 'left',
  },
  imageFlagContainer: {
    width: '85%',
    height: ' 20%',
    overflow: 'hidden',
    marginBottom: Sizes(7),
  },
  flagTitle: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: Sizes(10),
  },
  imageFlag: {
    width: '100%',
    height: '100%',
    marginBottom: Sizes(15),
  },
  flagItem: {
    borderTopRightRadius: Sizes(10),
    borderBottomRightRadius: Sizes(10),
    height: '80%',
  },
  flagBlock: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainerTitle: {
    backgroundColor: BackgroundColors.white,
    width: '80%',
    height: '100%',
    justifyContent: 'space-between',
  },
  sportTitle: {
    fontWeight: 'bold',
    color: '#8e969e',
  },
  sportBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlack: {
    borderRadius: Sizes(10),
    width: '40%',
    height: '100%',
    backgroundColor: '#e3f4ff',
  },
  listContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  itemContainer: {
    height: Sizes(180),
    marginVertical: Sizes(8),
    backgroundColor: BackgroundColors.white,
    borderRadius: Sizes(12),
    flexDirection: 'row',
    padding: Sizes(5),
    ...Shadow,
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: Sizes(10),
    borderBottomRightRadius: normalize(8),
    borderBottomLeftRadius: normalize(8),
  },
  sportImage: {
    width: Sizes(30),
    height: Sizes(30),
    marginRight: Sizes(10),
    resizeMode: 'contain',
  },
  infoContainer: {
    flexDirection: 'row',
    borderRadius: Sizes(10),
    width: '60%',
    backgroundColor: '#e3f4ff',
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  separator: {
    height: Sizes(10),
  },
});

export default styles;
