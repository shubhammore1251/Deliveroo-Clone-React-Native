import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import useCartStore from "../store/useCartStore";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "../utils/formatCurrency";

const BasketSummary = ({ restaurantData }) => {
  const navigation = useNavigation();
  const { getCartTotal, getTotalQuantity } = useCartStore();
  const total = getCartTotal(restaurantData?._id);
  const totalQuantity = getTotalQuantity(restaurantData?._id);
  const translateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        position: "absolute",
        bottom: 20,
        zIndex: 50,
        width: "100%",
      }}
    >
      <TouchableOpacity
        className="mx-5 bg-[#00CCBB] flex-row items-center justify-between p-4 rounded-lg"
        onPress={() =>
          navigation.navigate("basket_screen", {
            restaurantData: restaurantData,
          })
        }
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-md">
          {totalQuantity ?? 0}
        </Text>
        <Text className="font-extrabold text-center text-white text-lg">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {formatCurrency(total ?? 0, "en-GB", "GBP")}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BasketSummary;
