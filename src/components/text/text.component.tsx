import React from 'react';
import {Text} from 'react-native';
import {RMTextProps} from './text.types';

import {Styles} from './text.style';

export const RMText: React.FC<RMTextProps> = props => {
  const {children, size, ...otherProps} = props;

  return (
    <Text {...otherProps} style={[Styles.base, Styles[size]]}>
      {children}
    </Text>
  );
};
