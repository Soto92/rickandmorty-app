/* eslint-disable no-catch-shadow */
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {RMCharacterItem, RMText, RMSearchBar} from '../../components';

import serviceClient from '../../services/index';

import {Styles} from './characters.style';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    callServiceCharacters();
  }, []);

  const callServiceCharacters = async () => {
    const params = {
      page: page,
      name: searchValue,
    };

    try {
      const data = await serviceClient.getCharacters(params);
      if (page < data.info.pages) {
        setPage(previous => (previous = previous + 1));
        setCharacters([...characters, ...data.results]);
      }
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const renderItem = item => {
    return <RMCharacterItem character={item} />;
  };

  const renderContent = () => {
    return (
      <View>
        <FlatList
          data={characters}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderItem(item)}
          onEndReached={() => callServiceCharacters()}
          onEndReachedThreshold={10}
        />
      </View>
    );
  };

  const renderServiceError = () => {
    return (
      <View style={Styles.containerError}>
        <RMText size="normal">
          Error in our timeline, try again in another time or space!
        </RMText>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <RMSearchBar
        value={searchValue}
        onPressSearch={() => {
          callServiceCharacters();
        }}
        onChangeText={text => {
          setPage(1);
          setCharacters([]);
          setSearchValue(text);
        }}
      />
      {error ? renderServiceError() : characters.length > 0 && renderContent()}
    </SafeAreaView>
  );
};
