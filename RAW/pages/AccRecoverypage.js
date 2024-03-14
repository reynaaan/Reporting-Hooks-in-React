/* Reynan Jhay A. Busano, Anven Moses L. Agbulos, Wyne Khristian B. Ipanag
   IT73/IT35B - Application Development */
   
import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import COLORS from "../constants/colors";
import logo from "../assets/RAWLOGO.jpg";

function AccRecoverypage({ navigation }) {
  const [email, setEmail] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Reset Password</Text>
        <TextInput
          style={styles.input}
          label="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Send Reset OTP Code
        </Button>
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Login")}
        >
          Back to Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 40,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  logo: {
    height: 500,
    width: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    color: COLORS.secondary,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: COLORS.lightGrey,
  },
  button: {
    width: "100%",
    marginTop: 20,
    backgroundColor: COLORS.primary,
  },
  link: {
    color: COLORS.teal,
    fontSize: 16,
    marginTop: 20,
  },
});

export default AccRecoverypage;
