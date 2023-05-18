import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DiamondIcon} from '../../components/Svgs/Diamond';
import {normalize} from '../../assets/RootStyles/normalize';
import {Colors} from '../../assets/RootStyles';

const COLORS = ['red', 'blue', 'green', 'yellow'];
const COLOR_NAMES = ['Red', 'Blue', 'Green', 'Yellow'];
const GAME_DURATION = 60; // 1 minute

export default function Diamonds() {
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [score, setScore] = useState(0);
  const [currentCrystalColor, setCurrentCrystalColor] = useState(COLORS[0]);
  const [crystals, setCrystals] = useState(COLORS);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
        if (timeRemaining === 1) {
          Alert.alert(`Highest Score: ${score || '-'}`, '', [
            {
              text: 'Try again',
              onPress: () => {
                setScore(0);
                setCurrentCrystalColor(
                  COLOR_NAMES[Math.floor(Math.random() * COLOR_NAMES.length)],
                );
                shuffleCrystals(COLORS);
                setTimeRemaining(60);
              },
            },
          ]);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  useEffect(() => {
    AsyncStorage.getItem('highestScore').then(savedScore => {
      if (score > parseInt(savedScore)) {
        AsyncStorage.setItem('highestScore', score.toString());
      }
    });
  }, [score]);

  const handleCrystalPress = color => {
    if (color === currentCrystalColor.toLowerCase()) {
      setScore(prevScore => prevScore + 1);
      setCurrentCrystalColor(
        COLOR_NAMES[Math.floor(Math.random() * COLOR_NAMES.length)],
      );
      shuffleCrystals(COLORS);
    }
  };

  const shuffleCrystals = colors => {
    const shuffledColors = colors.sort(() => Math.random() - 0.5);
    setCrystals(shuffledColors);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg-k.jpg')}
        style={styles.backgroundImage}
        resizeMode={'cover'}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={{marginVertical: normalize(20), alignItems: 'center'}}>
            <Text style={{fontSize: 24, color: Colors.white}}>
              Time Remaining: {timeRemaining}s
            </Text>
            <Text style={{fontSize: 24, color: Colors.white}}>
              Score: {score}
            </Text>
          </View>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              flexGrow: 1,
              backgroundColor: 'rgba(10, 37, 64,.8)',
              marginHorizontal: normalize(16),
              height: '50%',
              borderRadius: normalize(24),
            }}>
            {crystals.map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCrystalPress(color)}
                style={{
                  width: `${100 / 2}%`,
                  height: `${100 / 2}%`,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderColor: '#e9e9e9',
                  borderTopLeftRadius: index === 0 ? 24 : 0,
                  borderTopRightRadius: index === 1 ? 24 : 0,
                  borderBottomLeftRadius: index === 2 ? 24 : 0,
                  borderBottomRightRadius: index === 3 ? 24 : 0,
                }}>
                <DiamondIcon
                  width={normalize(100)}
                  height={normalize(100)}
                  color={color}
                />
              </TouchableOpacity>
            ))}
            <View
              style={{
                width: `${100 / 3.5}%`,
                height: `${100 / 3.5}%`,
                backgroundColor: '#0a2540',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: `${(100 - 100 / 3.5) / 2}%`,
                left: `${(100 - 100 / 3.5) / 2}%`,
                right: `${(100 - 100 / 3.5) / 2}%`,
                bottom: `${(100 - 100 / 3.5) / 2}%`,
                borderRadius: 100 / 2,
                borderWidth: 4,
                borderColor: '#e9e9e9',
              }}>
              <Text style={{fontSize: 24, color: Colors.white}}>
                {currentCrystalColor}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export function Leaderboard() {
  const [highestScore, setHighestScore] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('highestScore').then(savedScore => {
      setHighestScore(savedScore);
    });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.highestScore}>
        Highest Score: {highestScore || '-'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  gameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
