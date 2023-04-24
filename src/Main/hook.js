import {useEffect, useRef, useState} from 'react';
import {BackHandler, Image, Linking, Text, View} from 'react-native';
import {deviceInfo} from '../assets/DeviceInfo';
import getUrl from '../services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isEmpty} from 'lodash';
import {Styles} from './styles';
import CarrierInfo from 'react-native-carrier-info';

let canGoBack = false;
function useContainer() {
  const webViewRef = useRef(null);
  const [uri, setUri] = useState('');
  const [loader, setLoader] = useState(true);
  const [conditionForPlug, setConditionForPlug] = useState(true);

  const styles = Styles();

  useEffect(() => {
    if (deviceInfo.google || isEmpty(uri)) {
      setConditionForPlug(true);
    } else {
      setConditionForPlug(false);
      // Linking.openURL(uri);
    }
  }, [uri]);

  function getUri() {
    let loadFire;
    AsyncStorage.getItem('url').then(async url => {
      console.log(url, 'URL');
      if (isEmpty(url)) {
        loadFire = await getUrl();
        await setUri(loadFire);
        setTimeout(() => {
          setLoader(false);
        }, 300);
        return;
      }
      await setUri(url);
      setTimeout(() => {
        setLoader(false);
      }, 300);
    });
  }

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      if (canGoBack) {
        webViewRef.current.goBack();
        return true;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const renderPlugItem = ({item, index}) => {
    const {title, description, urlToImage} = item;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: urlToImage}} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
    );
  };

  const onNavigationStateChange = backState => {
    canGoBack = backState.canGoBack;
  };

  const renderItemSeparatorComponent = () => <View style={styles.separator} />;

  useEffect(() => {
    getUri();
    if (deviceInfo.android) {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onAndroidBackPress,
        );
      };
    }
  }, []);

  return {
    styles,
    uri,
    webViewRef,
    conditionForPlug,
    renderPlugItem,
    renderItemSeparatorComponent,
    loader,
    onNavigationStateChange,
  };
}

export default useContainer;
