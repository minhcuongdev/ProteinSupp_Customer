import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "./navigators/StackNavigator/RootStack";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const MainApp = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
};

export default MainApp;
