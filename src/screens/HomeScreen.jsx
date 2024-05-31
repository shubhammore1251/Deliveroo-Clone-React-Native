import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [featuredCategories, setFeaturedCategories] = useState([]);
  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
      }}
      className="bg-white"
    >
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View className="flex-row pb-3 items-center mx-2 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon
              size={20}
              color="#00CCBB"
              style={{ marginLeft: 2 }}
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("account")}>
          <UserIcon size={25} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={25} color="#00CCBB" />
          <TextInput
            placeholder="Resturants and Cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon size={25} color="#00CCBB" />
      </View>

      {/* Main Content Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured*/}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid Placements for our parnters"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone been enjoying this juicy discounts!"
        />

        {/* Offers Near You */}
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="why not support your local resturant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
