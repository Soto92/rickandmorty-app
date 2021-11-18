import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {ReactTestInstance} from 'react-test-renderer';

import {RMSearchBar} from '../../../components';

describe('Searchbar component', () => {
  let getByTestId: (value: string) => ReactTestInstance;
  let wrapper = null;
  const mockReturnValue = jest.fn();
  const famousProgrammerInHistory = 'AdaLovelace';

  beforeEach(() => {
    wrapper = render(
      <RMSearchBar
        onChangeText={mockReturnValue}
        value={'InitialValue'}
        onPressSearch={jest.fn}
      />,
    );

    getByTestId = wrapper.getByTestId;
  });

  test('should changes the entered value', () => {
    const input = getByTestId('RMSearchInput');

    fireEvent.changeText(input, famousProgrammerInHistory);

    expect(mockReturnValue).toHaveBeenCalledWith('AdaLovelace');
  });
});
