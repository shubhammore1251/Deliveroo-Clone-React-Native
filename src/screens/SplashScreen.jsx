import { View, Dimensions, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";
import AppText from "../components/AppText";

const SplashScreen = ({ setSplashLoading }) => {
  const { height } = Dimensions.get("screen");

  useEffect(() => {
    const timer = setTimeout(() => {
      (async () => {
        console.log("Splash Loading...");
      })();
      console.log("Splash Loading stopped...");
      setSplashLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View
        className="flex-1 justify-center items-center"
        style={{ height, backgroundColor: "#00CCBB" }}
      >
        {/* <StatusBar backgroundColor="transparent" barStyle="light-content" /> */}
        {/* <Logo /> */}
        <Image
          source={require("../../assets/images/Logo/deliveroo-clone-logo.png")}
          className="w-full h-64"
        />

        <AppText className="text-lg text-center text-white font-bold">
          Deliveroo Clone
        </AppText>
      </View>
    </>
  );
};

export default SplashScreen;
