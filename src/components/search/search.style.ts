import {StyleSheet} from 'react-native';
import Theme from '../../configs/theme.json';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors['black-medium'],
    marginVertical: 4,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  input: {
    flex: 1,
    color: Theme.colors['grey-light'],
  },
  image: {
    width: 30,
    height: 30,
  },
});
