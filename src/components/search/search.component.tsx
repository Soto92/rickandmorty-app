import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';

import {RMSearchBarProps} from './search.types';
import {Styles} from './search.style';

export const RMSearchBar = (props: RMSearchBarProps) => {
  const {onChangeText, onPressSearch, value} = props;

  return (
    <View style={Styles.container}>
      <TextInput
        testID="RMSearchInput"
        caretHidden
        value={value}
        autoCorrect={false}
        style={Styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={onPressSearch}
      />
      <TouchableOpacity onPress={onPressSearch}>
        <Image
          style={Styles.image}
          source={require('../../assets/images/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
