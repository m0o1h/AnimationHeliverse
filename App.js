import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';
import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import ThirdScreen from './Screens/ThirdScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='FirstScreen' >
          <Stack.Screen name='FirstScreen' component={FirstScreen} 
          options={{
            headerShown:false,
          }}
          ></Stack.Screen>
          <Stack.Screen name='SecondScreen' component={SecondScreen} 
          options={{
            headerShown:false,
          }}
          ></Stack.Screen>
          <Stack.Screen name='ThirdScreen' component={ThirdScreen} 
          options={{
            headerShown:false,
          }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

