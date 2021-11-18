import React from 'react';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';

import {ReactTestInstance} from 'react-test-renderer';

import {RMText} from '../../../components';

describe('Text component', () => {
  let getByTestId: (value: string) => ReactTestInstance;
  let wrapper = null;

  beforeEach(() => {
    wrapper = render(
      <View>
        <RMText testID="smallText" size="small">
          SmallText
        </RMText>
        <RMText testID="normalText" size="normal">
          NormalText
        </RMText>
        <RMText testID="bigText" size="big">
          BigText
        </RMText>
      </View>,
    );

    getByTestId = wrapper.getByTestId;
  });

  test('should render a small text', () => {
    const text = getByTestId('smallText');

    expect(text).toBeDefined();
    expect(text.type).toContain('Text');
    expect(text.props.children).toEqual('SmallText');
  });

  test('should render a normal text', () => {
    const text = getByTestId('normalText');

    expect(text).toBeDefined();
    expect(text.type).toContain('Text');
    expect(text.props.children).toEqual('NormalText');
  });

  test('should render a big text', () => {
    const text = getByTestId('bigText');

    expect(text).toBeDefined();
    expect(text.type).toContain('Text');
    expect(text.props.children).toEqual('BigText');
  });
});
