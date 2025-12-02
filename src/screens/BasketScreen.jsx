// import React, { useEffect } from "react";
// import {
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   StatusBar,
// } from "react-native";
// import {
//   MinusCircleIcon,
//   PlusCircleIcon,
//   XCircleIcon,
// } from "react-native-heroicons/solid";
// import {
//   SafeAreaView,
//   useSafeAreaInsets,
// } from "react-native-safe-area-context";
// import useCartStore from "../store/useCartStore";
// import { formatCurrency } from "../utils/formatCurrency";
// import AppText from "../components/AppText";

// const BasketScreen = ({ navigation, route }) => {
//   const restaurantData = route.params?.restaurantData;
//   const insets = useSafeAreaInsets();
//   const { cart, removeFromCart, addToCart, getCartTotal, emptyRestaurantCart } =
//     useCartStore();
//   const restaurantCart = cart[restaurantData?._id] ?? [];
//   const total = getCartTotal(restaurantData?._id) ?? 0;
//   console.log("restaurantCart", restaurantCart);

//   useEffect(() => {
//     if (restaurantCart && restaurantCart.length === 0) {
//       navigation.goBack();
//     }
//   }, [restaurantCart]);

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       {/* <StatusBar backgroundColor="transparent" barStyle="dark-content" /> */}
//       <View className="flex-1 bg-gray-100">
//         <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
//           <View>
//             <AppText className="text-lg font-bold text-center">Basket</AppText>
//             <AppText className="text-center text-gray-400">
//               {restaurantData?.title ?? ""}
//             </AppText>
//           </View>

//           <TouchableOpacity
//             className="rounded-full bg-gray-100 absolute top-3 right-5"
//             onPress={() => navigation.goBack()}
//           >
//             <XCircleIcon height={50} width={50} color="#00CCBB" />
//           </TouchableOpacity>
//         </View>

//         <View className="flex-row items-center justify-between bg-white my-5 px-4 py-3">
//           <Image
//             source={{
//               uri: "https://links.papareact.com/wru",
//             }}
//             className="h-7 w-7 bg-gray-300 p-4 rounded-full"
//           />
//           <AppText className="">Deliver in 30-40 mins</AppText>
//           <TouchableOpacity>
//             <AppText className="text-[#00CCBB]">Change</AppText>
//           </TouchableOpacity>
//         </View>

//         <FlatList
//           data={restaurantCart}
//           showsHorizontalScrollIndicator={false}
//           className="pb-36 px-1"
//           keyExtractor={(item) => `${item.dishId}`}
//           renderItem={({ item }) => (
//             <View className="flex-row items-center justify-between space-x-2 bg-white py-2 px-2 w-full">
//               <View className="flex-1 flex-row items-center gap-x-2">
//                 <Image
//                   source={{ uri: item?.item?.image ?? "" }}
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <AppText className="flex-1">{item?.item?.name ?? ""}</AppText>
//               </View>
//               <View className="flex-[0.5] flex-row items-center justify-end gap-x-2 py-1">
//                 <AppText className="text-gray-600">
//                   {formatCurrency(
//                     item?.item?.price * item?.quantity ?? 0,
//                    "en-IN", "INR"
//                   )}
//                 </AppText>

//                 <View className="flex-row items-center space-x-2">
//                   <TouchableOpacity
//                     disabled={item?.quantity > 0 ? false : true}
//                     onPress={() =>
//                       removeFromCart(restaurantData?._id, item?.item?._id)
//                     }
//                   >
//                     <MinusCircleIcon
//                       color={item?.quantity > 0 ? "#00CCBB" : "gray"}
//                       size={25}
//                     />
//                   </TouchableOpacity>
//                   <AppText className="text-[#00CCBB] mx-1">
//                     {item?.quantity ?? 0}
//                   </AppText>
//                   <TouchableOpacity
//                     onPress={() =>
//                       addToCart(
//                         restaurantData?._id,
//                         item?.item?._id,
//                         item?.item
//                       )
//                     }
//                   >
//                     <PlusCircleIcon color="#00CCBB" size={25} />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           )}
//         />

//         {/*This subtotal, Delivery Fee, Tax, Total amount will be recieved from backend for now just we have dummy values */}
//         <View className="p-5 bg-white mt-5 space-y-4">
//           <View className="flex-row justify-between">
//             <AppText className="text-gray-400">Subtotal</AppText>
//             <AppText className="text-gray-400">
//               {formatCurrency(total ?? 0, "en-IN", "INR")}
//             </AppText>
//           </View>

//           <View className="flex-row justify-between">
//             <AppText className="text-gray-400">Tax</AppText>
//             <AppText className="text-gray-400">
//               {formatCurrency(8.0 ?? 0, "en-IN", "INR")}
//             </AppText>
//           </View>

//           <View className="flex-row justify-between">
//             <AppText className="text-gray-400">Deivery Fee</AppText>
//             <AppText className="text-gray-400">
//               {formatCurrency(10 ?? 0, "en-IN", "INR")}
//             </AppText>
//           </View>

//           <View className="flex-row justify-between">
//             <AppText>Order Total</AppText>
//             <AppText className="font-extrabold">
//               {formatCurrency(total + 8.0 + 10 ?? 0, "en-IN", "INR")}
//             </AppText>
//           </View>

//           <TouchableOpacity
//             className="rounded-lg bg-[#00CCBB] p-4 mt-4"
//             onPress={() => {
//               navigation.replace("preparing_order_screen", {
//                 restaurantData: restaurantData,
//               });
//             }}
//           >
//             <AppText className="text-center text-white text-lg font-bold">
//               Place Order
//             </AppText>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default BasketScreen;

import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MapPin,
  Phone,
  ChevronRight,
  Edit,
  Receipt,
  Home,
  Briefcase,
  X,
  CreditCard,
  Wallet,
} from "lucide-react-native";
import useCartStore from "../store/useCartStore";
import { formatCurrency } from "../utils/formatCurrency";
import AppText from "../components/AppText";
import { addresses, cardOptions, savedUpi, upiOptions } from "../../data/data";
import { BottomSheet } from "../components/BottomSheet";

const BasketScreen = ({ navigation, route }) => {
  const restaurantData = route.params?.restaurantData;
  const { cart, removeFromCart, addToCart, getCartTotal } = useCartStore();
  const restaurantCart = cart[restaurantData?._id] ?? [];
  const total = getCartTotal(restaurantData?._id) ?? 0;
  const [donationAmount, setDonationAmount] = useState("3");
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState({
    name: "Pay on delivery",
    type: "cod",
  });

  useEffect(() => {
    setSelectedAddress(addresses[0]);
  }, []);

  useEffect(() => {
    if (restaurantCart && restaurantCart.length === 0) {
      navigation.goBack();
    }
  }, [restaurantCart]);

  const renderAddressIcon = (type) => {
    if (type === "Home") return <Home size={24} color="#666" />;
    if (type === "Work") return <Briefcase size={24} color="#666" />;
    return <MapPin size={24} color="#666" />;
  };

  const finalTotal = total + 18;
  const ActualTotal = finalTotal * 1.2;
  const discountAmount = ActualTotal - finalTotal;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        {/* Header */}
        <View className="px-5 py-4 bg-white">
          <View>
            <AppText className="text-xl font-bold text-center">Basket</AppText>
            <AppText className="text-center text-gray-500 mt-1">
              {restaurantData?.title ?? ""}
            </AppText>
          </View>
          <TouchableOpacity
            className="rounded-full absolute top-3 right-5"
            onPress={() => navigation.goBack()}
          >
            <XCircleIcon height={36} width={36} color="#666" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Order Items */}
          <View className="bg-white mt-1 px-4 py-3">
            <FlatList
              data={restaurantCart}
              scrollEnabled={false}
              keyExtractor={(item) => `${item.dishId}`}
              renderItem={({ item }) => (
                <View className="flex-row items-center py-3">
                  <Image
                    source={{ uri: item?.item?.image ?? "" }}
                    className="w-14 h-14 rounded-lg"
                  />
                  <View className="flex-1 ml-3">
                    <AppText className="text-base font-medium text-gray-800">
                      {item?.item?.name ?? ""}
                    </AppText>
                    <AppText className="text-sm text-gray-600 mt-1">
                      {formatCurrency(
                        item?.item?.price * item?.quantity ?? 0,
                        "en-IN",
                        "INR"
                      )}
                    </AppText>
                  </View>
                  <View className="flex-row items-center">
                    <TouchableOpacity
                      disabled={item?.quantity === 0}
                      onPress={() =>
                        removeFromCart(restaurantData?._id, item?.item?._id)
                      }
                    >
                      <MinusCircleIcon
                        color={item?.quantity > 0 ? "#00CCBB" : "gray"}
                        size={26}
                      />
                    </TouchableOpacity>
                    <AppText className="text-[#00CCBB] mx-3 font-semibold text-base">
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
                      <PlusCircleIcon color="#00CCBB" size={26} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View className="h-px bg-gray-100" />
              )}
            />
          </View>

          {/* Delivery Address */}
          <TouchableOpacity
            className="bg-white mx-0 mt-1 p-4"
            activeOpacity={0.8}
            onPress={() => setShowAddressModal(true)}
          >
            <View className="flex-row items-start">
              <MapPin size={16} color="#8a8585ff" strokeWidth={2} />
              <View className="flex-1 ml-3 mr-2">
                <AppText className="text-gray-700 font-semibold text-base">
                  Delivery at {selectedAddress?.type || "Home"}
                </AppText>
                <AppText className="text-gray-500 text-sm mt-1 leading-5">
                  {selectedAddress?.address?.substring(0, 50) || ""}...
                </AppText>
                <TouchableOpacity className="mt-2">
                  <AppText className="text-blue-500 text-sm underline">
                    Add instructions for delivery partner
                  </AppText>
                </TouchableOpacity>
              </View>
              <ChevronRight size={22} color="#8a8585ff" />
            </View>
          </TouchableOpacity>

          {/* Contact Info */}
          <View className="bg-white mx-0 mt-0.5 p-4">
            <View className="flex-row items-center">
              <Phone size={22} color="#8a8585ff" strokeWidth={2} />
              <AppText className="text-gray-700 font-medium text-base ml-3 flex-1">
                Jhon Doe, {selectedAddress?.phone || "+91-9867123456"}
              </AppText>
              <ChevronRight size={22} color="#8a8585ff" />
            </View>
          </View>

          {/* Total Bill */}
          <TouchableOpacity
            className="bg-white mx-0 mt-0.5 p-4"
            activeOpacity={0.8}
          >
            <View className="flex-row items-start">
              <Receipt size={22} color="#8a8585ff" strokeWidth={2} />
              <View className="flex-1 ml-3 mr-2">
                <View className="flex-row items-center flex-wrap">
                  <AppText className="text-gray-700 font-semibold text-base">
                    Total Bill{" "}
                  </AppText>
                  <AppText className="text-gray-400 line-through text-base">
                    ₹{ActualTotal?.toFixed(2)}
                  </AppText>
                  <AppText className="text-gray-700 text-base font-bold ml-1">
                    {" "}
                    ₹{finalTotal?.toFixed(2)}
                  </AppText>
                  <View className="ml-2 bg-blue-500 px-2 py-1 rounded">
                    <AppText className="text-white text-xs font-medium">
                      You saved ₹{discountAmount?.toFixed(2)}
                    </AppText>
                  </View>
                </View>
                <AppText className="text-gray-400 text-sm mt-1">
                  Incl. taxes and charges
                </AppText>
              </View>
              <ChevronRight size={22} color="#8a8585ff" />
            </View>
          </TouchableOpacity>

          {/* Cancellation Policy */}
          <View className="px-4 py-4">
            <AppText className="text-xs font-bold tracking-widest text-gray-500 mb-2">
              CANCELLATION POLICY
            </AppText>
            <AppText className="text-gray-600 text-sm leading-5">
              Help us reduce food waste by avoiding cancellations after placing
              your order. A 100% cancellation fee will be applied.
            </AppText>
          </View>

          <View className="h-32" />
        </ScrollView>

        {/* Bottom Payment Section */}
        <View className="bg-white border-t border-gray-200 px-4 pt-2 pb-3">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              className="flex-1 flex-row items-center"
              onPress={() => setShowPaymentModal(true)}
            >
              {selectedPayment.logo && (
                <Image
                  source={{ uri: selectedPayment.logo }}
                  className="w-10 h-10 rounded-lg mr-3"
                  resizeMode="contain"
                />
              )}
              {selectedPayment.type === "cod" && (
                <View className="w-10 h-10 bg-gray-100 rounded-lg items-center justify-center mr-3">
                  <Wallet size={24} color="#000" />
                </View>
              )}
              <View className="flex-1">
                <View className="flex-row items-center mb-1">
                  <AppText className="text-gray-500 text-xs mr-1">
                    PAY USING
                  </AppText>
                  <AppText className="text-gray-500 text-xs">▲</AppText>
                </View>
                <AppText className="font-bold text-base">
                  {selectedPayment.name}
                </AppText>
                <AppText className="text-gray-500 text-xs">
                  {selectedPayment.type === "cod"
                    ? "UPI/Cash"
                    : selectedPayment.type === "upi"
                      ? selectedPayment.id || "UPI"
                      : "Card"}
                </AppText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#00CCBB] rounded-lg px-6 py-3 flex-row items-center"
              onPress={() => {
                navigation.replace("preparing_order_screen", {
                  restaurantData: restaurantData,
                });
              }}
            >
              <View className="mr-3">
                <AppText className="text-white text-xs font-medium">
                  ₹{total + 18}
                </AppText>
                <AppText className="text-white text-xs">TOTAL</AppText>
              </View>
              <AppText className="text-white text-lg font-bold">
                Place Order ▶
              </AppText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Address Selection Modal */}
        <BottomSheet
          visible={showAddressModal}
          onClose={() => setShowAddressModal(false)}
        >
          {/* Header */}
          <View
            className="flex-row items-center justify-between px-4 pb-3 pt-3 border-b border-gray-200 bg-white"
            style={{ zIndex: 10 }}
          >
            <AppText className="text-lg font-bold">Select Address</AppText>
            <TouchableOpacity onPress={() => setShowAddressModal(false)}>
              <X size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Scrollable content */}
          <ScrollView
            className="px-4 pt-3"
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            {addresses.map((address) => (
              <TouchableOpacity
                key={address.id}
                className={`mb-3 p-4 rounded-xl border ${
                  selectedAddress?.id === address.id
                    ? "border-[#00CCBB] bg-[#00CCBB]/5"
                    : "border-gray-200 bg-white"
                }`}
                onPress={() => {
                  setSelectedAddress(address);
                  setShowAddressModal(false);
                }}
              >
                <View className="flex-row items-start">
                  <View className="mr-3">
                    {renderAddressIcon(address.type)}
                  </View>
                  <View className="flex-1">
                    <AppText className="text-base font-semibold mb-1">
                      {address.type}
                    </AppText>
                    <AppText className="text-sm text-gray-600 leading-5">
                      {address.address}
                    </AppText>
                    <AppText className="text-xs text-gray-500 mt-2">
                      {address.distance}
                    </AppText>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </BottomSheet>

        {/* Payment Selection Modal */}
        <BottomSheet
          visible={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
        >
          <View className="flex-row items-center justify-between px-4 pb-3 border-b border-gray-200">
            <AppText className="text-lg font-bold">Payment Method</AppText>
            <TouchableOpacity onPress={() => setShowPaymentModal(false)}>
              <X size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView
            className="px-4 pt-2"
            contentContainerStyle={{ paddingBottom: 40 }} // <- space at bottom
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            <AppText className="text-sm font-semibold tracking-widest text-gray-500 mb-3">
              UPI
            </AppText>

            {upiOptions.map((upi) => (
              <TouchableOpacity
                key={upi.id}
                className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3"
                onPress={() => {
                  setSelectedPayment({
                    name: upi.name,
                    type: "upi",
                    logo: upi.logo,
                  });
                  setShowPaymentModal(false);
                }}
              >
                <Image
                  source={{ uri: upi.logo }}
                  className="w-12 h-12 rounded-lg bg-white"
                  resizeMode="contain"
                />
                <AppText className="flex-1 ml-3 text-base font-medium">
                  {upi.name}
                </AppText>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3"
              onPress={() => {
                setSelectedPayment({
                  name: savedUpi.id,
                  type: "upi",
                  id: savedUpi.id,
                  logo: savedUpi.logo,
                });
                setShowPaymentModal(false);
              }}
            >
              <Image
                source={{ uri: savedUpi.logo }}
                className="w-12 h-12 rounded-lg bg-white"
                resizeMode="contain"
              />
              <AppText className="flex-1 ml-3 text-base font-medium">
                {savedUpi.id}
              </AppText>
            </TouchableOpacity>

            <AppText className="text-sm font-semibold tracking-widest text-gray-500 mb-3 mt-4">
              CARDS
            </AppText>

            {cardOptions.map((card) => (
              <TouchableOpacity
                key={card.id}
                className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3"
              >
                <View className="w-12 h-12 bg-white rounded-lg items-center justify-center">
                  <CreditCard size={24} color="#000" />
                </View>
                <AppText className="flex-1 ml-3 text-base font-medium">
                  {card.title}
                </AppText>
              </TouchableOpacity>
            ))}

            <AppText className="text-sm font-semibold tracking-widest text-gray-500 mb-3 mt-4">
              OTHER
            </AppText>

            <TouchableOpacity
              className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3"
              onPress={() => {
                setSelectedPayment({
                  name: "Pay on delivery",
                  type: "cod",
                  logo: null,
                });
                setShowPaymentModal(false);
              }}
            >
              <View className="w-12 h-12 bg-white rounded-lg items-center justify-center">
                <Wallet size={24} color="#000" />
              </View>
              <AppText className="flex-1 ml-3 text-base font-medium">
                Pay on delivery
              </AppText>
            </TouchableOpacity>
          </ScrollView>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
