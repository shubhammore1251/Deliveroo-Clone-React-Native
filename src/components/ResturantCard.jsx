import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import AppText from "./AppText";

const ResturantCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() =>
        navigation.navigate("restaurant", {
          data: item,
        })
      }
    >
      <Image
        source={{ uri: item?.imageUrl }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <AppText className="font-bold text-lg pt-2">{item?.title}</AppText>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={20} />
          <AppText className="text-xs text-gray-500">
            <AppText className="text-green-500 text-center">{item?.rating}</AppText>
            &nbsp;&#x2022;&nbsp;
            {item?.genre}
          </AppText>
        </View>
        <View className="flex-row items-center space-x-1 mt-1">
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <AppText className="text-xs text-gray-500">
            Nearby
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
