import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { dishes } from "../../data/ResturantData";
import DishRow from "../components/DishRow";
import BasketSummary from "../components/BasketSummary";
import useCartStore from "../store/useCartStore";

const RestaurantScreen = ({ navigation, route }) => {
  const data = route.params.data;
  const { height } = Dimensions.get("screen");
  const { cart } = useCartStore();

  // Find the restaurant's cart items
  const restaurantCart = cart[data?._id] ?? [];
  return (
    <>
      {restaurantCart && restaurantCart.length > 0 && <BasketSummary restaurantData={data}/>}
      <ScrollView>
        <StatusBar backgroundColor="transparent" />
        <View className="relative">
          <Image
            source={{ uri: data?.imageUrl }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            className="absolute top-10 left-3 rounded-full bg-gray-200 p-1"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon color="#00CCBB" size={25} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-2">
            <Text className="text-3xl font-bold">{data?.title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row space-x-2 items-center">
                <StarIcon color="green" opacity={0.5} size={20} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500 text-center">
                    {data?.rating}
                  </Text>
                  &nbsp;&#x2022;&nbsp;
                  {data?.genre}
                </Text>
              </View>

              <View className="flex-row space-x-1 items-center">
                <MapPinIcon color="gray" opacity={0.4} size={20} />
                <Text className="text-xs text-gray-500">
                  Nearby &#x2022; {data?.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">
              {data?.short_description}
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.4} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* Dish Rows */}
          {dishes &&
            dishes.map((item) => (
              <DishRow key={item._id} item={item} restaurantId={data?._id} />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
