import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Progress from 'react-native-progress';
import MapView, {Marker , PROVIDER_GOOGLE } from "react-native-maps";
import { faker } from '@faker-js/faker';


const DeliveryScreen = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const restaurantData = route.params?.restaurantData;

  console.log()
  return (
    <View className="flex-1 bg-[#00ccbb]">
      <SafeAreaView
        style={{
          paddingTop: insets.top,
        }}
        className="z-50"  
      >
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">30-40 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} indeterminate={true} color="#00ccbb"/>

          <Text className="mt-3 text-gray-500">
            Your order at {restaurantData?.title ?? ''} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
            latitude: restaurantData?.latitude,
            longitude: restaurantData?.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        }}
        className="flex-1 -mt-10 z-0"
        // mapType="mutedStandard"
        provider={PROVIDER_GOOGLE}
      >
       <Marker
         coordinate={{
            latitude: restaurantData?.latitude,
            longitude: restaurantData?.longitude,
         }}
         title={restaurantData?.title ?? ''}
         description={restaurantData?.short_description ?? ''}
         identifier="origin"
         pinColor="#00CCBB"
       />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
            <Text className="text-lg">{faker.person.firstName()} {faker.person.lastName()}</Text>
            <Text className="text-gray-400">Your Rider</Text>
        </View>

        <TouchableOpacity>
         <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
