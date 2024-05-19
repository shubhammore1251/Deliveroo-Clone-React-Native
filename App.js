import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';
import BasketScreen from "./src/screens/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
 
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "slide_from_bottom",
          }}
        >
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="restaurant" component={RestaurantScreen} />
          <Stack.Screen name="basket_screen" component={BasketScreen} options={{presentation: 'modal', headerShown: false}}/>
          <Stack.Screen name="preparing_order_screen" component={PreparingOrderScreen} options={{presentation: 'fullScreenModal', headerShown: false}}/>
          <Stack.Screen name="delivery" component={DeliveryScreen} options={{presentation: 'fullScreenModal', headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
