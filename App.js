// In App.js in a new project

import * as React from "react";
import { View, Text, AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from './screens/login.js';
import HomeScreen from './screens/home.js';
import DetailsScreen from './screens/details.js';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="الدخول"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="الدخول" component={LoginScreen} />
        <Stack.Screen name="الاستراحات" component={HomeScreen} />
        <Stack.Screen name="تفاصيل الاستراحة" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("main", () => Main);
