import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  image: {
    height: height,
    width: height * 1.77,
  },
  gradient: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 50,
    paddingLeft: 8,
  },
  menu: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
  },
});
