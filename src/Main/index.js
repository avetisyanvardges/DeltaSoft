import React from 'react';
import WebView from 'react-native-webview';
import useContainer from './hook';
import {Image, View} from 'react-native';
import StackNavigation from '../navigation/StackNavigator';
import {Sizes} from '../assets/RootStyles';

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
        source={require('../assets/kansino.png')}
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
