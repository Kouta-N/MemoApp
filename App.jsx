/* eslint-disable */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import AppBar from "./src/components/AppBar";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <MemoListScreen />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MemoList" component={MemoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
