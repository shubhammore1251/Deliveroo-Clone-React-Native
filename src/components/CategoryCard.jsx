import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import AppText from "./AppText";

const CategoryCard = ({ item }) => {
  return (
    <TouchableOpacity className="relative mr-3">
      <Image
        source={{ uri: item?.imgUrl }}
        className="h-20 w-20 rounded-lg"
        resizeMode="cover"
      />

      <View className="absolute bottom-0 left-0 right-0 bg-black/60 px-1 py-0.5 rounded-b">
        <AppText
          className="text-xs text-white font-semibold text-center"
          numberOfLines={1}
        >
          {item.title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
