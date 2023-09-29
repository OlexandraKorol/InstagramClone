import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screen_one} from './screens/screenOne';
import {Screen_two} from './screens/screenTwo';
import {Screen_three} from './screens/screenThree';
import {Modal} from './modal';
import {HomeScreen} from './screens/HomeScreen';

export const StackNavigator = memo(() => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="one" component={Screen_one} />
        <Stack.Screen name="two" component={Screen_two} />
        <Stack.Screen name="three" component={Screen_three} />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="modal" component={Modal} />
      </Stack.Group>
    </Stack.Navigator>
  );
});
