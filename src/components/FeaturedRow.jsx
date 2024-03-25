import { View, Text, FlatList } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import { restaurantData } from "../../data/ResturantData";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <FlatList
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        data={restaurantData}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <ResturantCard item={item} />}
      />
    </View>
  );
};

export default FeaturedRow;
