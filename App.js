import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [splashLoading, setSplashLoading] = useState(true);

  return (
    <>
      {splashLoading ? (
        <SplashScreen setSplashLoading={setSplashLoading} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
