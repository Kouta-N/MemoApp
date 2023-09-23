/* eslint-disable */
import { StyleSheet, Text, View } from "react-native";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import LoginScreen from "./src/screens/LoginScreen";

import AppBar from "./src/components/AppBar";

export default function App() {
  // return <MemoListScreen />;
  // return <MemoDetailScreen />;
  // return <MemoEditScreen />;
  // return <MemoCreateScreen />;
  return <LoginScreen />;
}
