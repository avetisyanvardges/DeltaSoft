import React from 'react';
import WebView from 'react-native-webview';
import useContainer from './hook';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import StackNavigation from '../navigation/StackNavigator';
import {BackgroundColors, Sizes} from '../assets/RootStyles';
import {deviceInfo} from '../assets/DeviceInfo';
import {normalize} from '../assets/RootStyles/normalize';

const Main = () => {
  const {
    styles,
    uri,
    webViewRef,
    loader,
    conditionForPlug,
    onNavigationStateChange,
  } = useContainer();
  console.log(loader, 'LOADER');
  console.log(conditionForPlug, 'LOADER');
  return loader ? (
    <View style={styles.loaderContainer}>
      <Image
        source={require('../assets/beebet.png')}
        style={{width: Sizes(100), height: Sizes(100)}}
      />
    </View>
  ) : conditionForPlug ? (
    <StackNavigation />
  ) : (
    <WebView
      ref={webViewRef}
      source={{
        uri,
      }}
      onNavigationStateChange={onNavigationStateChange}
      setSupportMultipleWindows={false}
    />
  );
};

export default Main;
