import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { BannerWithRedux } from "./src/BannerWithRedux";
import { Provider } from "react-redux";
import { store } from "./src/stores/store";
import { HomeScreen } from "./src/HomeScreen";
import { DetailScreen } from "./src/DetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartScreen } from "./src/CartScreen";

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="HomeStack" component={HomeStackScreen} />
          {/* <Tab.Screen name="Settings" component={SettingsStackScreen} /> */}
          <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
