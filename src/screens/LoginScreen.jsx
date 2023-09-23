import React from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

import AppBar from "../components/AppBar";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <Text>Login</Text>
        <TextInput value="Email Address" />
        <TextInput value="Password" />
        <View>
          <Text>Submit</Text>
        </View>
        <View>
          <Text>Not registered?</Text>
          <Text>Sign up here!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});
