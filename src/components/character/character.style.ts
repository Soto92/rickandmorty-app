import {StyleSheet} from 'react-native';
import Theme from '../../configs/theme.json';

export const Styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Theme.colors['black-medium'],
  },
  image: {
    width: 120,
    height: 120,
  },
  infos: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: 14,
  },
});
