/* eslint-disable react-native/no-inline-styles */
import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Person from './src/components/Person';

const PeopleList = () => {
  const API = 'https://gorest.co.in/public/v2/users';

  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(json => {
        setPeople(json);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={people}
        renderItem={({item}) => {
          return <Person item={item} />;
        }}
      />
    </View>
  );
};

export default PeopleList;
