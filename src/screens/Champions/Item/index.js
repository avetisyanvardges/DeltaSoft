import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

function Index({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Biography', item)}
      style={styles.itemContainer}>
      <View style={styles.titleBlack}>
        <View style={styles.imageContainer}>
          <Image source={item.img} style={styles.image} />
        </View>
        <View style={styles.sportBlock}>
          <Text style={styles.sportTitle}>{item.sport}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoContainerTitle}>
          <Text style={styles.infoContainerName}>{item.athlete}</Text>
          <Text style={styles.infoContainerText}>🏆Champion {item.year}</Text>
          <Text style={styles.infoContainerText}>🥇Gold {item.gold} </Text>
          <Text style={styles.infoContainerText}>🥈Silver {item.silver} </Text>
          <Text style={styles.infoContainerText}>🥉Bronze {item.bronze} </Text>
        </View>
        <View style={styles.flagBlock}>
          {Array.from({length: item.country.split(' ')[0].length}).map(
            (el, i) => {
              return (
                <Text key={i} style={styles.flagTitle}>
                  {item.country[i]}
                </Text>
              );
            },
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Index;
