import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {data} from './data.js';
import {normalize} from '../../assets/RootStyles/normalize';
import Item from './Item';

function Champions({navigation}) {
  const [medalists, setMedalists] = useState(data);
  return (
    <View>
      <Text>Top 10 Olympic Medalists of All Time</Text>
      <FlatList
        data={medalists}
        renderItem={({item, index}) => (
          <Item item={item} navigation={navigation} />
        )}
        contentContainerStyle={{paddingHorizontal: normalize(16)}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Champions;
