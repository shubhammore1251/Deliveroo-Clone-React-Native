import { View, TouchableOpacity, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import useCartStore from "../store/useCartStore";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "../utils/formatCurrency";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppText from "./AppText";

const BasketSummary = ({ restaurantData }) => {
  const navigation = useNavigation();
  const { getCartTotal, getTotalQuantity } = useCartStore();
  const total = getCartTotal(restaurantData?._id);
  const totalQuantity = getTotalQuantity(restaurantData?._id);
  const translateY = useRef(new Animated.Value(100)).current;
  const insets = useSafeAreaInsets();

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
        bottom: insets.bottom,
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
        <AppText className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-md">
          {totalQuantity ?? 0}
        </AppText>
        <AppText className="font-extrabold text-center text-white text-lg">
          View Basket
        </AppText>
        <AppText className="text-lg text-white font-extrabold">
          {formatCurrency(total ?? 0, "en-IN", "INR")}
        </AppText>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BasketSummary;
