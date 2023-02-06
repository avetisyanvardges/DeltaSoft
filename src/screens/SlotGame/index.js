import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import {normalize} from '../../assets/RootStyles/normalize';
import {deviceInfo} from '../../assets/DeviceInfo';

const ScrollSlotGame = () => {
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const thirdLineRef = useRef(null);
  let matrix = [
    [
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
    ],
    [
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
    ],
    [
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
      '🍒',
      '💰',
      '🍇',
      '🍉',
      '🎰',
      '💎',
    ],
  ];
  const [scrollIndex1, setScrollIndex1] = useState(matrix[0].length);
  const [scrollIndex2, setScrollIndex2] = useState(matrix[1].length);
  const [scrollIndex3, setScrollIndex3] = useState(matrix[2].length);
  const [lastRandomIndex1, setLastRandomIndex1] = useState(0);
  const [lastRandomIndex2, setLastRandomIndex2] = useState(0);
  const [lastRandomIndex3, setLastRandomIndex3] = useState(0);
  const [score, setScore] = useState(10000);
  const [win, setWin] = useState(0);
  const [finished, setFinished] = useState(false);
  const [winningIndexes, setWinningIndex] = useState([]);
  const spinValue1 = useRef(new Animated.Value(0)).current;
  const spinValue2 = useRef(new Animated.Value(0)).current;
  const spinValue3 = useRef(new Animated.Value(0)).current;

  const spin1 = spinValue1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const spin2 = spinValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const spin3 = spinValue3.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const spin = () => {
    if (score > 0) {
      setWinningIndex([]);
      spinValue1.setValue(0);
      spinValue2.setValue(0);
      spinValue3.setValue(0);

      let randomIndex1 =
        lastRandomIndex1 < 10
          ? Math.floor(Math.random() * (matrix[0].length - 16)) + 10
          : Math.floor(Math.random() * 10);
      let randomIndex2 =
        lastRandomIndex2 < 10
          ? Math.floor(Math.random() * (matrix[1].length - 16)) + 10
          : Math.floor(Math.random() * 10);
      let randomIndex3 =
        lastRandomIndex3 < 10
          ? Math.floor(Math.random() * (matrix[2].length - 16)) + 10
          : Math.floor(Math.random() * 10);
      while (randomIndex1 === lastRandomIndex1) {
        randomIndex1 = Math.floor(Math.random() * matrix[0].length);
      }
      while (randomIndex2 === lastRandomIndex2) {
        randomIndex2 = Math.floor(Math.random() * matrix[0].length);
      }
      while (randomIndex3 === lastRandomIndex3) {
        randomIndex3 = Math.floor(Math.random() * matrix[0].length);
      }
      firstLineRef.current.scrollToIndex({
        index: randomIndex1,
        animated: true,
      });
      setScrollIndex1(randomIndex1);
      setLastRandomIndex1(randomIndex1);
      secondLineRef.current.scrollToIndex({
        index: randomIndex2,
        animated: true,
      });
      setScrollIndex2(randomIndex2);
      setLastRandomIndex2(randomIndex2);
      thirdLineRef.current.scrollToIndex({
        index: randomIndex3,
        animated: true,
      });
      setScrollIndex3(randomIndex3);
      setLastRandomIndex3(randomIndex3);
      setTimeout(() => {
        setFinished(true);
      }, 100);
    } else {
      Alert.alert('There is not enough money on your balance', '', [
        {
          text: 'Try again',
          onPress: () => setScore(10000),
        },
      ]);
    }
  };

  useEffect(() => {
    if (finished) {
      gameCase();
    }
  }, [finished]);

  function gameCase() {
    if (
      matrix[0][scrollIndex1 + 1] === matrix[0][scrollIndex2 + 1] &&
      matrix[1][scrollIndex2 + 1] === matrix[1][scrollIndex3 + 1]
    ) {
      Animated.parallel([
        Animated.timing(spinValue1, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(spinValue2, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(spinValue3, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
      setWinningIndex([scrollIndex1 + 1, scrollIndex2 + 1, scrollIndex3 + 1]);
      setScore(score + 100);
      setWin(100);
      return setFinished(false);
    }
    if (matrix[0][scrollIndex1 + 1] === matrix[0][scrollIndex2 + 1]) {
      Animated.parallel([
        Animated.timing(spinValue1, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(spinValue2, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
      setWinningIndex([scrollIndex1 + 1, scrollIndex2 + 1]);
      setScore(score + 50);
      setWin(50);
      return setFinished(false);
    } else if (matrix[1][scrollIndex2 + 1] === matrix[1][scrollIndex3 + 1]) {
      Animated.parallel([
        Animated.timing(spinValue2, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(spinValue3, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
      setWinningIndex([scrollIndex2 + 1, scrollIndex3 + 1]);
      setScore(score + 50);
      setWin(50);
      return setFinished(false);
    }

    setScore(score - 100);
    setFinished(false);
  }

  const onEndReached = () => {
    if (scrollIndex1 === matrix[0].length) {
      firstLineRef.current.scrollToIndex({
        index: 0,
        animated: true,
      });
      setScrollIndex1(0);
    } else {
      firstLineRef.current.scrollToIndex({
        index: matrix[0].length,
        animated: true,
      });
      setScrollIndex1(matrix[0].length);
    }
    if (scrollIndex2 === matrix[0].length) {
      secondLineRef.current.scrollToIndex({
        index: 0,
        animated: true,
      });
      setScrollIndex2(0);
    } else {
      secondLineRef.current.scrollToIndex({
        index: matrix[1].length,
        animated: true,
      });
      setScrollIndex2(matrix[1].length);
    }
    if (scrollIndex3 === matrix[0].length) {
      thirdLineRef.current.scrollToIndex({
        index: 0,
        animated: true,
      });
      setScrollIndex3(0);
    } else {
      thirdLineRef.current.scrollToIndex({
        index: matrix[2].length,
        animated: true,
      });
      setScrollIndex3(matrix[2].length);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/bg.jpg')}
      style={{
        flex: 1,
        backgroundColor: '#061423',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'white',
          borderBottomWidth: 1,
          borderTopWidth: 1,
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>Balance:</Text>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
          {score}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(92,92,92,.4)',
          padding: 16,
        }}>
        <View
          style={{
            flex: 1,

            alignItems: 'center',
            backgroundColor: 'rgba(92,92,92,.8)',
            borderRadius: 12,
            height: normalize(270),
            marginRight: 16,
          }}>
          <FlatList
            ref={firstLineRef}
            data={[...matrix[0], ...matrix[0]]}
            renderItem={({item, index}) => {
              const selected =
                scrollIndex1 + 1 === index && winningIndexes.includes(index);
              return (
                <Animated.View
                  style={{
                    transform: [
                      {
                        rotate: spin1,
                      },
                    ],
                    borderColor: 'orange',
                    borderWidth: selected ? 1.5 : 0,
                    marginVertical:
                      deviceInfo.deviceHeight < 800
                        ? normalize(7)
                        : normalize(10),

                    paddingVertical: 5,
                    paddingHorizontal: 15,
                  }}>
                  <Text
                    key={`second_${matrix[0][index]}`}
                    style={{
                      fontSize: normalize(50),
                      color: selected ? 'red' : null,
                    }}>
                    {item}
                  </Text>
                </Animated.View>
              );
            }}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id || index.toString()}
            onEndReached={onEndReached}
            initialScrollIndex={scrollIndex1}
          />
        </View>
        <View
          style={{
            flex: 1,

            alignItems: 'center',
            backgroundColor: 'rgba(92,92,92,.8)',
            borderRadius: 12,
            height: normalize(270),
            marginRight: 16,
          }}>
          <FlatList
            ref={secondLineRef}
            data={[...matrix[1], ...matrix[1]]}
            renderItem={({item, index}) => {
              const selected =
                scrollIndex2 + 1 === index && winningIndexes.includes(index);
              return (
                <Animated.View
                  style={{
                    transform: [
                      {
                        rotate: spin2,
                      },
                    ],
                    borderColor: 'orange',
                    borderWidth: selected ? 1.5 : 0,
                    marginVertical:
                      deviceInfo.deviceHeight < 800
                        ? normalize(7)
                        : normalize(10),
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                  }}>
                  <Text
                    key={`second_${matrix[1][index]}`}
                    style={[
                      {
                        fontSize: normalize(50),
                        color: selected ? 'red' : null,
                      },
                    ]}>
                    {item}
                  </Text>
                </Animated.View>
              );
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id || index.toString()}
            onEndReachedThreshold={0.5}
            scrollEnabled={false}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'rgba(92,92,92,.8)',
            borderRadius: 12,
            height: normalize(270),
          }}>
          <FlatList
            ref={thirdLineRef}
            data={[...matrix[2], ...matrix[2]]}
            renderItem={({item, index}) => {
              const selected =
                scrollIndex3 + 1 === index && winningIndexes.includes(index);
              return (
                <Animated.View
                  style={{
                    transform: [
                      {
                        rotate: spin3,
                      },
                    ],
                    borderColor: 'orange',
                    borderWidth: selected ? 1.5 : 0,
                    marginVertical:
                      deviceInfo.deviceHeight < 800
                        ? normalize(7)
                        : normalize(10),
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                  }}>
                  <Text
                    key={`second_${matrix[2][index]}`}
                    style={[
                      {
                        fontSize: normalize(50),
                        color: selected ? 'red' : null,
                      },
                    ]}>
                    {item}
                  </Text>
                </Animated.View>
              );
            }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            keyExtractor={(item, index) => item.id || index.toString()}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'white',
          borderBottomWidth: 1,
          borderTopWidth: 1,
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>Win: </Text>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
          {win}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 100,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={spin}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,

            backgroundColor: 'white',
          }}>
          <Image
            source={require('../../assets/spin.png')}
            style={{width: 100, height: 100, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ScrollSlotGame;
