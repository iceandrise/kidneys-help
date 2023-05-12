import AsyncStorage from '@react-native-async-storage/async-storage';

import { getDeviceLanguage } from '../utils';

const STORE_LANGUAGE_KEY = 'LANG_STORAGE';

export const languageDetectorPlugin = {
  type: 'languageDetector',
  init: () => {},
  detect: () => {
    return getDeviceLanguage();
  },
  cacheUserLanguage: (language) => {
    console.log('language', language);
    try {
      AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {
      AsyncStorage.setItem(STORE_LANGUAGE_KEY, 'en');
    }
  },
};
