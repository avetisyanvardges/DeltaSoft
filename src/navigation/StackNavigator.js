import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../services/RootNavigation';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import SlotGame from '../screens/SlotGame';

const Stack = createSharedElementStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'SlotMachine'}>
        {/*<Stack.Screen name="Home" component={Home} />*/}
        {/*<Stack.Screen*/}
        {/*  name="Details"*/}
        {/*  component={Details}*/}
        {/*  sharedElements={route => [route.params.item.publishedAt]}*/}
        {/*/>*/}
        <Stack.Screen name="SlotMachine" component={SlotGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
