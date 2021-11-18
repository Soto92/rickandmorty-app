import {StyleSheet} from 'react-native';
import Theme from '../../configs/theme.json';

export const Styles = StyleSheet.create({
  button: {
    borderColor: Theme.colors['white-light'],
    borderWidth: 2,
    width: 180,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
});
