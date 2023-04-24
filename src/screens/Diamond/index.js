import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DiamondIcon} from '../../components/Svgs/Diamond';
import {normalize} from '../../assets/RootStyles/normalize';
import {Colors} from '../../assets/RootStyles';

const COLORS = ['red', 'blue', 'green', 'yellow']; // List of possible crystal colors

export default function Diamonds() {
  const [timeRemaining, setTimeRemaining] = useState(60); // Time remaining in seconds
  const [score, setScore] = useState(0); // Current score
  const [currentCrystalColor, setCurrentCrystalColor] = useState(COLORS[0]); // Color of the current crystal

  // Update game state every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
      if (timeRemaining === 1) {
        // Time's up! Generate a new crystal color and reset the timer
        setCurrentCrystalColor(
          COLORS[Math.floor(Math.random() * COLORS.length)],
        );
        setTimeRemaining(60);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  // Save the highest score locally using AsyncStorage
  useEffect(() => {
    AsyncStorage.getItem('highestScore').then(savedScore => {
      if (score > parseInt(savedScore)) {
        AsyncStorage.setItem('highestScore', score.toString());
      }
    });
  }, [score]);

  // Handle crystal press
  const handleCrystalPress = color => {
    if (color === currentCrystalColor) {
      // Correct crystal color! Increment score, generate new crystal color, and reset timer
      setScore(prevScore => prevScore + 1);
      setCurrentCrystalColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
      setTimeRemaining(60);
    }
  };

  // Render the game screen
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24}}>Time Remaining: {timeRemaining}s</Text>
      <Text style={{fontSize: 24}}>Score: {score}</Text>
      <TouchableOpacity onPress={() => handleCrystalPress(currentCrystalColor)}>
        <DiamondIcon
          width={normalize(100)}
          height={normalize(100)}
          color={Colors.red}
        />
      </TouchableOpacity>
    </View>
  );
}

// Render the leaderboard screen
export function Leaderboard() {
  const [highestScore, setHighestScore] = useState(null);

  // Load the highest score from AsyncStorage
  useEffect(() => {
    AsyncStorage.getItem('highestScore').then(savedScore => {
      setHighestScore(savedScore);
    });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24}}>Highest Score: {highestScore || '-'}</Text>
    </View>
  );
}
