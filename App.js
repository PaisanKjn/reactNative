import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#7AAAAA",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="first"
          component={FirstPage}
          options={{ title: "FirstPage" }}
        />
        <Stack.Screen
          name="second"
          component={SecondPage}
          options={{ title: "SecondPage" }}
        />
        <Stack.Screen
          name="third"
          component={ThirdPage}
          options={{ title: "ThirdPage" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
