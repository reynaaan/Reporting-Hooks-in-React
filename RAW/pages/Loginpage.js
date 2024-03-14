/* Reynan Jhay A. Busano, Anven Moses L. Agbulos, Wyne Khristian B. Ipanag
   IT73/IT35B - Application Development */

import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import COLORS from "../constants/colors";
import logo from "../assets/RAWLOGO.jpg";

function Loginpage(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Montserrat_400Regular,
    Montserrat_700Bold,
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
        />
        <TextInput
          style={styles.input}
          label="Password"
          placeholder="Password"
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              name={showPassword ? "eye" : "eye-off"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          value={password}
          onChangeText={(text) => setPassword(text)}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 80,
    paddingVertical: 100,
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
    width: 400,
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
    width: "100%",
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
