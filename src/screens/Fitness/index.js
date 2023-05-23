import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import {navigate} from '../../services/RootNavigation';
import {Muscle} from '../../assets/MockData';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {normalize} from '../../assets/RootStyles/normalize';

function FitnessScreen() {
  const insets = useSafeAreaInsets();
  const styles = Styles();

  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigate('Exercises', {item})}>
        <Image source={item.img} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    </>
  );
  return (
    <View style={styles.content}>
      <Text
        style={[
          styles.header,
          {marginTop: insets.top ? insets.top : normalize(16)},
        ]}>
        TRAINING APP
      </Text>
      <FlatList
        data={Muscle}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default FitnessScreen;
