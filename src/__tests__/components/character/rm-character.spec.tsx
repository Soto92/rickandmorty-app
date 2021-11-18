import React from 'react';
import {render, within} from '@testing-library/react-native';

import {ReactTestInstance} from 'react-test-renderer';

import {RMCharacterItem} from '../../../components';
import {APICharacter} from '../../../components/character/character.types';

describe('Character component', () => {
  let getByTestId: (value: string) => ReactTestInstance;
  let wrapper = null;
  const character_mock: APICharacter = {
    name: 'Rick',
    status: 'Alive',
    gender: 'Male',
    species: 'Human',
    created: '',
    id: 9001,
    image:
      'https://images.tcdn.com.br/img/img_prod/697730/adesivo_lateral_vidro_caminhao_carro_decorativo_rick_and_morty_1147486360_1_20201210150106.jpg',
  };

  beforeEach(() => {
    wrapper = render(<RMCharacterItem character={character_mock} />);

    getByTestId = wrapper.getByTestId;
  });

  test('should render a character infos', () => {
    const node = getByTestId('RMCharacterItem');

    const characterName = within(node).getByText(character_mock.name);
    const characterGender = within(node).getByText(
      `Gender: ${character_mock.gender}`,
    );
    const characterSpecie = within(node).getByText(
      `Specie: ${character_mock.species}`,
    );
    const characterStatus = within(node).getByText(
      `Status: ${character_mock.status}`,
    );

    expect(characterName).toBeDefined();
    expect(characterGender).toBeDefined();
    expect(characterSpecie).toBeDefined();
    expect(characterStatus).toBeDefined();
  });
});
