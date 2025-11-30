import React, { useEffect } from "react";
import { View, TouchableOpacity, Image, Platform, StatusBar } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import {
  SafeAreaView,
} from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { faker } from "@faker-js/faker";
import useCartStore from "../store/useCartStore";
import AppText from "../components/AppText";

const DeliveryScreen = ({ navigation, route }) => {
  const restaurantData = route.params?.restaurantData;
  const { emptyRestaurantCart } = useCartStore();

  useEffect(() => {
    if (restaurantData) {
      emptyRestaurantCart(restaurantData?._id);
    }
  }, [restaurantData]);

  return (
    <View className="flex-1 bg-[#00ccbb]">
      {/* <StatusBar backgroundColor="transparent" barStyle="light-content" /> */}
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <AppText className="font-light text-white text-lg">Order Help</AppText>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <AppText className="text-lg text-gray-400">Estimated Arrival</AppText>
              <AppText className="text-4xl font-bold">30-40 Minutes</AppText>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} indeterminate={true} color="#00ccbb" />

          <AppText className="mt-3 text-gray-500">
            Your order at {restaurantData?.title ?? ""} is being prepared
          </AppText>
        </View>
      </SafeAreaView>

      {restaurantData?.latitude && restaurantData?.longitude ? (
        <MapView
          initialRegion={{
            latitude: restaurantData.latitude,
            longitude: restaurantData.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={{ flex: 1, marginTop: -40 }}
          provider={Platform.OS === "android" ? PROVIDER_GOOGLE : null}

        >
          <Marker
            coordinate={{
              latitude: restaurantData.latitude,
              longitude: restaurantData.longitude,
            }}
            title={restaurantData.title ?? ""}
            description={restaurantData.short_description ?? ""}
            identifier="origin"
            pinColor="#00CCBB"
          />
        </MapView>
      ) : null}

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1 ml-2">
          <AppText className="text-lg">
            {faker.person.firstName()} {faker.person.lastName()}
          </AppText>
          <AppText className="text-gray-400">Your Rider</AppText>
        </View>

        <TouchableOpacity>
          <AppText className="text-[#00CCBB] text-lg mr-5 font-bold">Call</AppText>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
