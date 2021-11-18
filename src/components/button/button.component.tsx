import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RMText} from '../text/text.component';
import {RMButtonProps} from './button.types';

import {Styles} from './button.style';

export const RMButton = (props: RMButtonProps) => {
  const {title, ...otherProps} = props;

  return (
    <TouchableOpacity {...otherProps}>
      <View style={Styles.button}>
        <RMText size="normal">{title}</RMText>
      </View>
    </TouchableOpacity>
  );
};
