import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { ChevronDown, Search, ChevronRight } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

export default function OrderHistoryScreen({ navigation }) {
  const appname = Constants.expoConfig.name;

  const orders = [
    {
      id: 1,
      restaurant: "La Pino'z Pizza",
      location: "Mumbai",
      deliveryNote: "",
      items: [
        { name: "Garlic Bread Sticks", quantity: 1, isVeg: true },
        {
          name: "Margherita Pizza",
          quantity: 1,
          size: "Regular (Serves 1, 17.7 CM)",
          isVeg: true,
        },
      ],
      date: "31 Oct 2023 at 4:23 PM",
      total: "₹221.00",
      rating: 5,
      status: "Delivered",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycbm0euSyF4yvIuU6zvO6m84MV_2sacGEtA&s'
    },
    {
      id: 2,
      restaurant: "Burger King",
      location: "Mumbai",
      deliveryNote: "",
      items: [
        { name: "Whopper", quantity: 2, isVeg: false },
        { name: "French Fries", quantity: 1, size: "Medium", isVeg: true },
      ],
      date: "28 Oct 2023 at 8:15 PM",
      total: "₹450.00",
      rating: 4,
      status: "Delivered",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-uSQL17cD7VTCniWFVtC7mwPaPoPBp6Njw&s'
    },
    {
      id: 3,
      restaurant: "Domino's Pizza",
      location: "Mumbai",
      deliveryNote: "",
      items: [
        { name: "Farmhouse Pizza", quantity: 1, size: "Medium", isVeg: true },
        { name: "Pepsi", quantity: 2, isVeg: true },
      ],
      date: "25 Oct 2023 at 7:30 PM",
      total: "₹599.00",
      rating: 5,
      status: "Delivered",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Ja_muhuPY9Vk9N5O9-gem9H60ekIeJIP9g&s'
    },
  ];


  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <ChevronDown size={24} color="#000" onPress={() => navigation.pop()}/>
        <Text className="text-lg font-semibold">Your Orders</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView className="flex-1">
        {/* Search Bar */}
        <View className="px-4 py-3">
          <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3">
            <Search size={20} color="#666" />
            <TextInput
              placeholder="Search by restaurant or dish"
              placeholderTextColor="#999"
              className="flex-1 ml-2 text-base"
            />
          </View>
        </View>

        {/* Orders List */}
        {orders.map((order) => (
          <View
            key={order.id}
            className="mx-4 mb-4 bg-white rounded-lg border border-gray-200 overflow-hidden"
          >
            {/* Restaurant Header */}
            <View className="p-4 border-b border-gray-200">
              <View className="flex-row items-start justify-between">
                <View className="flex-1">
                  <View className="flex-row items-center">
                    <Image source={{ uri: order.image ?? '' }} className="w-12 h-12 bg-gray-200 rounded-lg mr-3 shadow-sm border border-gray-200" />
                    <View className="flex-1">
                      <Text className="text-base font-semibold">
                        {order.restaurant}
                      </Text>
                      <Text className="text-xs text-gray-500 mt-1">
                        {order.location}
                      </Text>
                      {order.deliveryNote && (
                        <Text className="text-xs text-gray-500 mt-1">
                          {order.deliveryNote}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
                <View className="flex-row items-center">
                  <View
                    className={`px-3 py-1 rounded-lg ${
                      order.status === "Delivered"
                        ? "bg-green-100"
                        : "bg-orange-100"
                    }`}
                  >
                    <Text
                      className={`text-xs font-medium ${
                        order.status === "Delivered"
                          ? "text-green-700"
                          : "text-orange-700"
                      }`}
                    >
                      {order.status}
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity className="mt-2 items-end">
                <Text className="text-red-500 text-sm font-medium">
                  View menu →
                </Text>
              </TouchableOpacity>
            </View>

            {/* Order Items */}
            <View className="p-4">
              {order.items.map((item, index) => (
                <View key={index} className={`flex-row ${item.size ? 'items-start': 'items-center'} mb-2`}>
                  <View
                    className={`w-4 h-4 border ${
                      item.isVeg ? "border-green-600" : "border-red-600"
                    } rounded flex items-center justify-center mr-2 mt-1`}
                  >
                    <View
                      className={`w-2 h-2 rounded-full ${
                        item.isVeg ? "bg-green-600" : "bg-red-600"
                      }`}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm">
                      {item.quantity} ×{" "}
                      <Text className="font-medium">{item.name}</Text>
                    </Text>
                    {item.size && (
                      <Text className="text-xs text-gray-500 mt-1">
                        {item.size}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>

            {/* Order Footer */}
            <View className="px-4 pb-4 flex-row items-center justify-between">
              <View>
                <Text className="text-xs text-gray-500">{order.date}</Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-xs text-gray-600 mr-1">You rated</Text>
                  {/* <View className="flex-row">{renderStars(order.rating)}</View> */}
                </View>
              </View>
              <TouchableOpacity className="flex-row items-center">
                <Text className="text-base font-semibold mr-1">
                  {order.total}
                </Text>
                <ChevronRight size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Zomato Logo */}
        <View className="items-start py-3 px-4">
          <Text className="text-gray-300 text-3xl font-bold">{appname}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
