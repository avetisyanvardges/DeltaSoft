import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../services/RootNavigation';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import SlotGame from '../screens/SlotGame';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Champions from '../screens/Champions';
import Biography from '../screens/Champions/Biography';
import DisplayScreen from '../screens/DisplayScreen';
import QuizScreen from '../screens/Quizz';
import Diamonds from '../screens/Diamond';
import Fitness from '../screens/Fitness';
import ExercisesScreen from '../screens/Exercises';

const Stack = createSharedElementStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Fitness'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          sharedElements={route => [route.params.item.publishedAt]}
        />
        <Stack.Screen name="SlotMachine" component={SlotGame} />
        {/*<Stack.Screen name="MatchGame" component={MatchGame} />*/}
        <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
        <Stack.Screen name="Champions" component={Champions} />
        <Stack.Screen name="Biography" component={Biography} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Diamonds" component={Diamonds} />
        <Stack.Screen name="Fitness" component={Fitness} />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
