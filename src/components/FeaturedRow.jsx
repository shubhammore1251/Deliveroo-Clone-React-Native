import { View, FlatList } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import { restaurantData } from "../../data/ResturantData";
import AppText from "./AppText";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <AppText className="font-bold text-lg">{title}</AppText>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <AppText className="text-xs px-4 text-gray-500">{description}</AppText>

      <FlatList
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        data={restaurantData}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item }) => <ResturantCard item={item} />}
      />
    </View>
  );
};

export default FeaturedRow;
