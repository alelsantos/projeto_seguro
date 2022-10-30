import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/Login";
import { RegisterScreen } from "../screens/Register";
import { HomeScreen } from "../screens/Home";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
