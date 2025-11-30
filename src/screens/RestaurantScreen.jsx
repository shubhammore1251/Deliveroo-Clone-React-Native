import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import React from "react";
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
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AppText from "../components/AppText";

const RestaurantScreen = ({ navigation, route }) => {
  const data = route.params.data;
  const { height } = Dimensions.get("screen");
  const { cart } = useCartStore();
  const insets = useSafeAreaInsets();

  // Find the restaurant's cart items
  const restaurantCart = cart[data?._id] ?? [];

  const restaurantDishes = dishes?.filter(
    (d) => d?.restaurantId === data?._id
  );

  return (
    <SafeAreaView className="flex-1">
      {/* <StatusBar backgroundColor="transparent" barStyle="dark-content" /> */}
      {restaurantCart && restaurantCart.length > 0 && (
        <BasketSummary restaurantData={data} />
      )}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 12 }}
        contentInsetAdjustmentBehavior="automatic"
      >
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
          <View className="px-2 pt-2">
            <AppText className="text-3xl font-bold">{data?.title}</AppText>
            <View className="flex-col gap-y-1 my-1">
              <View className="flex-row space-x-2 items-center">
                <StarIcon color="green" opacity={0.5} size={18} />
                <AppText className="text-sm text-gray-500">
                  <AppText className="text-green-500 text-center">
                    {data?.rating}
                  </AppText>
                  &nbsp;&#x2022;&nbsp;
                  {data?.genre}
                </AppText>
              </View>

              <View className="flex-row space-x-1 items-center">
                <MapPinIcon color="gray" opacity={0.4} size={20} />
                <AppText className="text-xs text-gray-500">
                  {data?.address}
                </AppText>
              </View>
            </View>

            <AppText className="text-gray-500 mt-2 pb-4">
              {data?.short_description}
            </AppText>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.4} size={20} />
            <AppText className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </AppText>
            <ChevronRightIcon color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <AppText className="px-4 pt-6 mb-3 font-bold text-xl">Menu</AppText>

          {/* Dish Rows */}
          {restaurantDishes &&
            restaurantDishes.map((item) => (
              <DishRow key={item._id} item={item} restaurantId={data?._id} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
