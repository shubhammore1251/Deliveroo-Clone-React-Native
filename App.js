import React, { useCallback, useEffect } from "react";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import BasketScreen from "./src/screens/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import Account from "./src/screens/Account";
import { Platform } from "react-native";
import Login from "./src/screens/Login";
import { useFonts } from "expo-font";
import OrderHistoryScreen from "./src/screens/OrderHistoryScreen";
import MyAddressesScreen from "./src/screens/AddressManage";
import { FavouriteOrdersScreen } from "./src/screens/FavouriteOrderScreen";
import { BookmarksScreen } from "./src/screens/BookMarksScreen";
import NotificationsScreen from "./src/screens/NotificationScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import PaymentSettingsScreen from "./src/screens/PaymentSettings";

// call this ONCE, outside the component
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  // hide splash when fonts are ready
  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000); // 2 sec delay

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "none",
            statusBarAnimation: "fade",
            ...(Platform.OS === "android"
              ? {
                  statusBarStyle: "dark",
                  statusBarColor: "transparent",
                  statusBarTranslucent: true,
                }
              : {}),
          }}
        >
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="basket_screen"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="preparing_order_screen"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="delivery"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="order_history"
            component={OrderHistoryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="my_addresses"
            component={MyAddressesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="favourite_orders"
            component={FavouriteOrdersScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="book_marks"
            component={BookmarksScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="notifications"
            component={NotificationsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="payment_settings"
            component={PaymentSettingsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
