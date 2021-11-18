import {useFocusEffect} from '@react-navigation/core';
import React, {useRef} from 'react';
import {ImageBackground, Dimensions, Animated, View} from 'react-native';

import Gradient from 'react-native-linear-gradient';
import {RMButton, RMText} from '../../components';

import {Styles} from './home.style';

const {height, width} = Dimensions.get('window');
const imageFinalPosition = width + -height * 1.77;

export const Home = ({navigation}) => {
  const translateXAnim = useRef(new Animated.Value(0)).current;

  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

  useFocusEffect(() => {
    starthorizontalAnim();
    return () => {
      Animated.timing(translateXAnim, {}).stop();
    };
  });

  const starthorizontalAnim = () => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(800),
        Animated.timing(translateXAnim, {
          toValue: imageFinalPosition,
          duration: 9000,
          useNativeDriver: false,
        }),
        Animated.timing(translateXAnim, {
          toValue: 0,
          duration: 7000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  return (
    <View>
      <AnimatedImage
        style={[Styles.image, {transform: [{translateX: translateXAnim}]}]}
        source={require('../../assets/images/rickandmorty.gif')}
      />

      <Gradient
        locations={[0.05, 0.4, 1]}
        style={Styles.gradient}
        colors={['#000000', '#000000CC', '#000000']}>
        <RMText size="big">Rick and Morty</RMText>

        <View style={Styles.menu}>
          <RMButton
            title="Characters"
            onPress={() => navigation.navigate('Characters')}
          />
          <RMButton title="Infos" />
        </View>
      </Gradient>
    </View>
  );
};
