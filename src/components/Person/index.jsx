/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

const index = ({item}) => {
  return (
    <View style={{margin: 20, fontSize: 18, flexDirection: 'column'}}>
      <Text>{item?.id}</Text>
      <Text>{item?.name}</Text>
      <Text>{item?.email}</Text>
      <Text>{item?.gender}</Text>
      <Text>{item?.status}</Text>
    </View>
  );
};

export default index;
