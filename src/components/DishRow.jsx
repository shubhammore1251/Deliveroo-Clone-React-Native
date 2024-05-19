import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { formatCurrency } from "../utils/formatCurrency";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import useCartStore from "../store/useCartStore";
import { useFocusEffect } from "@react-navigation/native";

const DishRow = ({ item, restaurantId }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { addToCart, removeFromCart, cart } = useCartStore();

  // Find the restaurant's cart items
  const restaurantItems = cart[restaurantId] ?? [];

  // Find the dish in the restaurant's cart items
  const dish = restaurantItems?.find(
    (restaurant) => restaurant.dishId === item._id
  );

  useFocusEffect(
    React.useCallback(() => {
      if (dish && dish.quantity > 0) {
        setIsPressed(true);
      }else if (!dish) {
        setIsPressed(false);
      }
    }, [dish])
  );

  
  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{item.name}</Text>
            <Text className="text-gray-400">{item.short_description}</Text>
            <Text className="text-gray-600 mt-2">
              {formatCurrency(item.price, "en-GB", "GBP")}
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: item.image ?? "" }}
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={dish?.quantity > 0 ? false : true}
              onPress={() => removeFromCart(restaurantId, item._id)}
            >
              <MinusCircleIcon
                color={dish?.quantity > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{dish?.quantity ?? 0}</Text>
            <TouchableOpacity
              onPress={() => addToCart(restaurantId, item._id, item)}
            >
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
