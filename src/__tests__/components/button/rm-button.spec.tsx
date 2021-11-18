import React from 'react';
import {fireEvent, render, within} from '@testing-library/react-native';

import {ReactTestInstance} from 'react-test-renderer';

import {RMButton} from '../../../components';

describe('Button component', () => {
  let getByTestId: (value: string) => ReactTestInstance;
  let wrapper = null;
  const mockPress = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <RMButton title="Next" testID="RMButton_Test" onPress={mockPress} />,
    );

    getByTestId = wrapper.getByTestId;
  });

  test('should button call onPress prop', () => {
    const button = getByTestId('RMButton_Test');

    fireEvent(button, 'onPress');

    expect(mockPress).toHaveBeenCalledTimes(1);
  });

  test('should button has children text (title)', () => {
    const button = getByTestId('RMButton_Test');
    const textButton = within(button).getByText('Next');

    expect(textButton).toBeDefined();
    expect(textButton.props.style[0].fontFamily).toEqual('Get Schwifty');
    expect(textButton.props.style[1].fontSize).toEqual(18);
  });
});
