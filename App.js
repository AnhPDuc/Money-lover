import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import HomeS from "./home"
import PlanS from "./planning"
import PlusS from "./plus"
import TranS from "./transactions"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MyApp = () => {
  return (
    <NavigationContainer>{
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{ tabBarIcon: () => <Text>🏠</Text>}} component={HomeS} />
        <Tab.Screen name="Transactions" options={{ tabBarIcon: () => <Text>📜</Text> }} component={TranS} />
        <Tab.Screen name="Plus" options={{ tabBarIcon: () => <Text>➕</Text> }} component={PlusS} />
        <Tab.Screen name="Planning" options={{ tabBarIcon: () => <Text>📅</Text> }} component={PlanS} />
      </Tab.Navigator>
    }</NavigationContainer>

  );
};

export default MyApp;