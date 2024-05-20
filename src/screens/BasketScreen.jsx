import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useCartStore from "../store/useCartStore";
import { formatCurrency } from "../utils/formatCurrency";

const BasketScreen = ({ navigation, route }) => {
  const restaurantData = route.params?.restaurantData;
  const insets = useSafeAreaInsets();
  const { cart, removeFromCart, addToCart, getCartTotal } = useCartStore();
  const restaurantCart = cart[restaurantData?._id] ?? [];
  const total = getCartTotal(restaurantData?._id) ?? 0;
  console.log("restaurantCart", restaurantCart);

  useEffect(() => {
    if (restaurantCart && restaurantCart.length === 0) {
      navigation.goBack();
    }
  }, [restaurantCart]);

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
      }}
      className="flex-1 bg-white"
    >
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurantData?.title ?? ""}
            </Text>
          </View>

          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            onPress={() => navigation.goBack()}
          >
            <XCircleIcon height={50} width={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between bg-white my-5 px-4 py-3">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="">Deliver in 30-40 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={restaurantCart}
          showsHorizontalScrollIndicator={false}
          className="pb-36"
          keyExtractor={(item) => `${item.dishId}`}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-start space-x-2 bg-white py-2 px-5">
              <Text className="text-[#00CCBB]">{item?.quantity ?? 0} x</Text>
              <Image
                source={{ uri: item?.item?.image ?? "" }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{item?.item?.name ?? ""}</Text>
              <Text className="text-gray-600">
                {formatCurrency(item?.item?.price ?? 0, "en-GB", "GBP")}
              </Text>

              <View className="flex-row items-center space-x-2">
                <TouchableOpacity
                  disabled={item?.quantity > 0 ? false : true}
                  onPress={() =>
                    removeFromCart(restaurantData?._id, item?.item?._id)
                  }
                >
                  <MinusCircleIcon
                    color={item?.quantity > 0 ? "#00CCBB" : "gray"}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    addToCart(restaurantData?._id, item?.item?._id, item?.item)
                  }
                >
                  <PlusCircleIcon color="#00CCBB" size={25} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {/*This subtotal, Delivery Fee, Tax, Total amount will be recieved from backend for now just we have dummy values */}
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              {formatCurrency(total ?? 0, "en-GB", "GBP")}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Tax</Text>
            <Text className="text-gray-400">
              {formatCurrency(1.0 ?? 0, "en-GB", "GBP")}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Deivery Fee</Text>
            <Text className="text-gray-400">
              {formatCurrency(5.99 ?? 0, "en-GB", "GBP")}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              {formatCurrency(total + 1.0 + 5.99 ?? 0, "en-GB", "GBP")}
            </Text>
          </View>

          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4"
            onPress={() =>
              navigation.navigate("preparing_order_screen", {
                restaurantData: restaurantData,
              })
            }
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
