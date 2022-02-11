import { Linking } from 'react-native';

export const goToUrl = (url: string): void => {
  Linking.canOpenURL(url).then((supported) => {
    supported ? Linking.openURL(url) : console.log('Cannot open url');
  });
}