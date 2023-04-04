import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import styles from './style';

function Biography({route}) {
  const data = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imgBlock}>
        <View style={styles.imgBg}>
          <Image source={data.img} style={styles.img} />
        </View>
        <View style={styles.titleBlack}>
          <View style={styles.titleInfoBlack}>
            <Text style={styles.flagTitle}>{data.sport}</Text>
          </View>
          <View style={styles.titleInfoBlack}>
            <Text style={styles.flagTitle}>{data.country}</Text>
          </View>
          <View
            style={{
              ...styles.titleInfoBlack,
              borderRightWidth: null,
            }}>
            <Text style={styles.flagTitle}>{data.championsDate}</Text>
          </View>
        </View>
      </View>
      <View style={styles.biography}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoContainerTitle}>
            <Text style={styles.infoContainerName}>{data.athlete}</Text>
            <Text style={styles.infoContainerText}>🏆Champion {data.year}</Text>
            <Text style={styles.infoContainerText}>🥇Gold {data.gold} </Text>
            <Text style={styles.infoContainerText}>
              🥈Silver {data.silver}{' '}
            </Text>
            <Text style={styles.infoContainerText}>
              🥉Bronze {data.bronze}{' '}
            </Text>
          </View>
          <Text style={styles.infoContainerText}>{data.career}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

export default Biography;
