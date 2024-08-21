import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
