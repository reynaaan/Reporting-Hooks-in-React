import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import COLORS from "../constants/colors";
import logo from "../assets/RAWLOGO.jpg";

const Loginpage = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Montserrat_400Regular,
  });

  const handleLogin = () => {
    props.navigation.navigate("Landing");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.message}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          color={COLORS.black}
        />
        <TextInput 
          placeholder='Password'
          label='Password'
          style = {styles.input}
          secureTextEntry = {!showPassword}
          right={
        <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              onPress={() => {
                Keyboard.dismiss;
                setShowPassword(!showPassword);
          }}
            color={COLORS.teal}
        />
          }
        />
        <TouchableOpacity onPress={() => props.navigation.navigate("AccRecovery")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          style={styles.loginButton}
          mode="contained"
          onPress={handleLogin}
        >
          Login
        </Button>
        <Text style={styles.registerText}>
          Don't have an account?{" "}
          <Text
            style={styles.registerLink}
            onPress={() => props.navigation.navigate("Register")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    height: 450,
    width: 450,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center",
  },
  message: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 15,
  },
  forgotPassword: {
    color: COLORS.teal,
    fontSize: 12,
    marginBottom: 20,
    alignSelf: "flex-end",
  },
  loginButton: {
    width: "50%",
    marginTop: 10,
    backgroundColor: COLORS.primary,
    alignSelf: "center",
  },
  registerText: {
    marginTop: 20,
    textAlign: "center",
  },
  registerLink: {
    color: COLORS.teal,
  },
});

export default Loginpage;
