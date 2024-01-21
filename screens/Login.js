// Import necessary modules
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SignUp from "./SignUp"; // Import the SignUp component

// Functional component for the login page
const Login = ({ navigation }) => {
  // State to store user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login button press
  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Username: ${username}, Password: ${password}`);
    navigation.navigate("Home");
  };

  // Function to navigate to the signup page
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Username input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup link */}
      <Text style={styles.signupLink} onPress={navigateToSignUp}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupLink: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Login;
