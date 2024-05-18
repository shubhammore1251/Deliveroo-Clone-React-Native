import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { formatCurrency } from "../../utils/formatCurrency";

const DishRow = ({ item }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text className="text-lg mb-1">{item.name}</Text>
        <Text className="text-gray-400">{item.short_description}</Text>
        <Text className="text-gray-600 mt-2">
          {formatCurrency(item.price, "en-IN", "INR")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
