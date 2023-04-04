import React, {useEffect, useState} from 'react';
import {deviceInfo} from '../../assets/DeviceInfo';
import {
  BackHandler,
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {normalize} from '../../assets/RootStyles/normalize';
import {isEmpty} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getUrl from '../../services/firebase';
import {navigate, replace} from '../../services/RootNavigation';

const DisplayScreen = () => {
  const [uri, setUri] = useState('');

  async function getUri() {
    let loadFire;
    AsyncStorage.getItem('url').then(async url => {
      if (isEmpty(url)) {
        loadFire = await getUrl();
        openInBrowser(loadFire);
      } else {
        await openInBrowser(url);
      }
      replace('Champions');
    });
  }

  const openInBrowser = url => {
    if (!deviceInfo.google && !isEmpty(url)) {
      Linking.openURL(url);
    }
  };
  return (
    <ImageBackground
      source={require('../../assets/display.png')}
      style={{
        width: deviceInfo.deviceWidth,
        height: deviceInfo.deviceHeight,
      }}
      resizeMode={'cover'}>
      <TouchableOpacity
        onPress={() => {
          getUri();
          // if (!deviceInfo.google && !isEmpty(uri)) {
          //   Linking.openURL(uri);
          // }
        }}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: normalize(150),
        }}>
        <Image
          source={require('../../assets/start.png')}
          style={{
            width: deviceInfo.deviceWidth,
            height: normalize(50),
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default DisplayScreen;
