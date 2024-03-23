import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

const ResturantCard = ({ item }) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{ uri: item?.imageUrl }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{item?.title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={20} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500 text-center">{item?.rating}</Text>&nbsp;&#x2022;&nbsp;
            {item?.genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 mt-1">
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">Nearby &#x2022; {item?.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
