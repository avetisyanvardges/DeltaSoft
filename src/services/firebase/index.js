import remoteConfig from '@react-native-firebase/remote-config';
import {isEmpty} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getUrl() {
  try {
    await remoteConfig().fetchAndActivate();
    const url = remoteConfig().getValue('url').asString();
    const checkVPN = remoteConfig().getValue('to').asString();
    if (!isEmpty(url)) {
      await AsyncStorage.setItem('url', url);
    }
    await AsyncStorage.setItem('to', checkVPN);
    return {url, checkVPN};
  } catch (e) {
    console.log(e, 'error:_firebaseRemote:getUrl');
  }
}

export default getUrl;
