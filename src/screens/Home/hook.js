import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Styles} from './style';
import {useNavigation} from '@react-navigation/native';

function useContainer() {
  const styles = Styles();
  const navigation = useNavigation();
  const renderPlugItem = ({item, index}) => {
    const {title, description, urlToImage} = item;

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Details', {item: item})}
        style={{borderRadius: 12}}>
        <ImageBackground
          source={{uri: urlToImage}}
          style={styles.itemContainer}
          borderRadius={12}
          resizeMode={'contain'}>
          <View style={styles.infoContainer}>
            <Text ellipsizeMode={'tail'} numberOfLines={2} style={styles.title}>
              {title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderItemSeparatorComponent = () => <View style={styles.separator} />;

  return {
    styles,
    renderPlugItem,
    renderItemSeparatorComponent,
  };
}

export default useContainer;
