import React, { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = ({ navigation, route }) => {
 useEffect(() => {
    setTimeout(() => {
        navigation.navigate('delivery', {
          restaurantData: route.params?.restaurantData,
        })
    }, 4000);
 }, [])
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
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
      >
        Waiting For Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white"/>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
