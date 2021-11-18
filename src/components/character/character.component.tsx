import React from 'react';
import {Image, Text, View} from 'react-native';
import {RMText} from '../text/text.component';
import {Styles} from './character.style';

import Theme from '../../configs/theme.json';

import {RMCharacterItemProps} from './character.types';

export const RMCharacterItem = (props: RMCharacterItemProps) => {
  const {character} = props;
  return (
    <View testID="RMCharacterItem" style={Styles.container}>
      <Image style={Styles.image} source={{uri: character.image}} />
      <View style={Styles.infos}>
        <RMText size="normal">{character.name}</RMText>
        <Text style={{color: Theme.colors['white-light']}}>
          Gender: {character.gender}
        </Text>
        <Text style={{color: Theme.colors['white-light']}}>
          Specie: {character.species}
        </Text>
        <Text style={{color: Theme.colors['white-light']}}>
          Status: {character.status}
        </Text>
      </View>
    </View>
  );
};
