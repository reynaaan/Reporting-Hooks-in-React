/* Reynan Jhay A. Busano, Anven Moses L. Agbulos, Wyne Khristian B. Ipanag
   IT73/IT35B - Application Development */

import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import COLORS from '../constants/colors';

import logo from '../assets/RAWLOGO.jpg';

function Landingpage(props) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <Text style={styles.message}>Welcome to RAW!</Text>
        <Text style={styles.userMessage}>Explore our platform and discover amazing content.</Text>
        <Button
          style={styles.button}
          icon="logout"
          mode="contained"
          onPress={() => props.navigation.navigate('Login')}
        >
          Logout
        </Button>
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
    padding: 20,
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  logo: {
    height: 600,
    width: 300,
    resizeMode: 'contain',
  },
  message: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  userMessage: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 18,
    color: COLORS.black,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    width: '50%',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
  },
});

export default Landingpage;
