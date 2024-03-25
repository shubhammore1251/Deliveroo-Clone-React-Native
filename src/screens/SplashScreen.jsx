import { View, Dimensions, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({setSplashLoading}) => {
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
    <View
      className="flex-1 justify-center items-center"
      style={{ height, backgroundColor: "#00CCBB" }}
    >
      {/* <StatusBar
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
      /> */}
      {/* <Logo /> */}
      <Image
        source={require("../../assets/images/Logo/deliveroo-clone-logo.png")}
        className="w-full h-64"
      />
    </View>
  );
};

export default SplashScreen;
