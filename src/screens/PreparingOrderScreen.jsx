import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

const PreparingOrderScreen = ({ navigation, route }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("delivery", {
        restaurantData: route.params?.restaurantData,
      });
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      {/* <StatusBar backgroundColor="transparent" barStyle="light-content" /> */}
      <Animatable.Image
        source={require("../../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center text-white"
        style={{ fontFamily: 'Poppins' }}
      >
        Waiting For Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
