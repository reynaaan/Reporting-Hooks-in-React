/* Reynan Jhay A. Busano, Anven Moses L. Agbulos, Wyne Khristian B. Ipanag
   IT73/IT35B - Application Development */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registrationpage from "./pages/Registrationpage";
import Landingpage from "./pages/Landingpage";
import AccRecoverypage from "./pages/AccRecoverypage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Loginpage} />
        <Stack.Screen name="Register" component={Registrationpage} />
        <Stack.Screen name="AccRecovery" component={AccRecoverypage} />
        <Stack.Screen name="Landing" component={Landingpage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
