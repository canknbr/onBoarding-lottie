import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import { GetItemStorage } from "../utils/storage";
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await GetItemStorage("onboarded");
    setShowOnboarding(onboarded === 1);
  };

  if (showOnboarding == null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={showOnboarding ? "Onboarding" : "Home"}>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnBoardingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
