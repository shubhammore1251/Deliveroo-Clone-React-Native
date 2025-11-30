import React, { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import useCartStore from "../store/useCartStore";
import { formatCurrency } from "../utils/formatCurrency";
import AppText from "../components/AppText";

const BasketScreen = ({ navigation, route }) => {
  const restaurantData = route.params?.restaurantData;
  const insets = useSafeAreaInsets();
  const { cart, removeFromCart, addToCart, getCartTotal, emptyRestaurantCart } =
    useCartStore();
  const restaurantCart = cart[restaurantData?._id] ?? [];
  const total = getCartTotal(restaurantData?._id) ?? 0;
  console.log("restaurantCart", restaurantCart);

  useEffect(() => {
    if (restaurantCart && restaurantCart.length === 0) {
      navigation.goBack();
    }
  }, [restaurantCart]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <StatusBar backgroundColor="transparent" barStyle="dark-content" /> */}
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <AppText className="text-lg font-bold text-center">Basket</AppText>
            <AppText className="text-center text-gray-400">
              {restaurantData?.title ?? ""}
            </AppText>
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
          <AppText className="">Deliver in 30-40 mins</AppText>
          <TouchableOpacity>
            <AppText className="text-[#00CCBB]">Change</AppText>
          </TouchableOpacity>
        </View>

        <FlatList
          data={restaurantCart}
          showsHorizontalScrollIndicator={false}
          className="pb-36 px-1"
          keyExtractor={(item) => `${item.dishId}`}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between space-x-2 bg-white py-2 px-2 w-full">
              <View className="flex-1 flex-row items-center gap-x-2">
                <Image
                  source={{ uri: item?.item?.image ?? "" }}
                  className="w-10 h-10 rounded-full"
                />
                <AppText className="flex-1">{item?.item?.name ?? ""}</AppText>
              </View>
              <View className="flex-[0.5] flex-row items-center justify-end gap-x-2 py-1">
                <AppText className="text-gray-600">
                  {formatCurrency(
                    item?.item?.price * item?.quantity ?? 0,
                   "en-IN", "INR"
                  )}
                </AppText>

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
                  <AppText className="text-[#00CCBB] mx-1">
                    {item?.quantity ?? 0}
                  </AppText>
                  <TouchableOpacity
                    onPress={() =>
                      addToCart(
                        restaurantData?._id,
                        item?.item?._id,
                        item?.item
                      )
                    }
                  >
                    <PlusCircleIcon color="#00CCBB" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />

        {/*This subtotal, Delivery Fee, Tax, Total amount will be recieved from backend for now just we have dummy values */}
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <AppText className="text-gray-400">Subtotal</AppText>
            <AppText className="text-gray-400">
              {formatCurrency(total ?? 0, "en-IN", "INR")}
            </AppText>
          </View>

          <View className="flex-row justify-between">
            <AppText className="text-gray-400">Tax</AppText>
            <AppText className="text-gray-400">
              {formatCurrency(8.0 ?? 0, "en-IN", "INR")}
            </AppText>
          </View>

          <View className="flex-row justify-between">
            <AppText className="text-gray-400">Deivery Fee</AppText>
            <AppText className="text-gray-400">
              {formatCurrency(10 ?? 0, "en-IN", "INR")}
            </AppText>
          </View>

          <View className="flex-row justify-between">
            <AppText>Order Total</AppText>
            <AppText className="font-extrabold">
              {formatCurrency(total + 8.0 + 10 ?? 0, "en-IN", "INR")}
            </AppText>
          </View>

          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4 mt-4"
            onPress={() => {              
              navigation.replace("preparing_order_screen", {
                restaurantData: restaurantData,
              });
            }}
          >
            <AppText className="text-center text-white text-lg font-bold">
              Place Order
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
