import {StyleSheet} from 'react-native';
import Theme from '../../configs/theme.json';

export const Styles = StyleSheet.create({
  base: {
    color: Theme.colors['white-light'],
    fontFamily: Theme.fonts.RickAndMorty,
  },
  small: {
    fontSize: 14,
  },
  normal: {
    fontSize: 18,
  },
  big: {
    fontSize: 30,
  },
});
