import React from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import {
  Bookmark,
  Bell,
  Settings,
  CreditCard,
  ShoppingBag,
  Heart,
  MapPin,
  HelpCircle,
  Star,
  ChevronRight,
  MoveLeft,
  ArrowLeft,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import AppText from "../components/AppText";

const Account = ({ navigation }) => {
  const version = Constants.expoConfig.version;
  const appname = Constants.expoConfig.name;
  // console.log('version', version);

  const firstSection = [
    {
      id: 1,
      label: "Your Orders",
      icon: <ShoppingBag size={22} color="#1c1c1c" />,
      onClick: () => navigation.navigate("order_history"),
    },
    {
      id: 2,
      label: "Favorite Orders",
      icon: <Heart size={22} color="#1c1c1c" />,
      onClick: () => navigation.navigate("favourite_orders"),
    },
    {
      id: 3,
      label: "Address Book",
      icon: <MapPin size={22} color="#1c1c1c" />,
      onClick: () => navigation.navigate("my_addresses"),
    },
    {
      id: 4,
      label: "Online Ordering Help",
      icon: <HelpCircle size={22} color="#1c1c1c" />,
      onClick: () => {},
    },
  ];

  const footerLinks = [
    { id: 1, label: "Send Feedback", onClick: () => {} },
    { id: 2, label: "Report a Safety Emergency", onClick: () => {} },
    { id: 3, label: "Rate us on the App Store", onClick: () => {} },
    {
      id: 4,
      label: "Log Out",
      isLogout: true,
      onClick: () => navigation.replace("login"),
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      className="bg-gray-100"
    >
      {/* Header */}
      <View className="px-4">
        <TouchableOpacity onPress={() => navigation.pop()}>
          <ArrowLeft size={25} color="#1c1c1c" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View className="bg-white mx-4 mt-4 rounded-2xl shadow-lg overflow-hidden">
          <View className="p-5">
            <View className="flex-row items-center">
              <View className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-pink-500 items-center justify-center overflow-hidden">
                <Image
                  source={{
                    uri: "https://api.dicebear.com/7.x/avataaars/png?seed=Will",
                  }}
                  className="w-full h-full"
                />
              </View>

              <View className="flex-1 ml-4">
                <AppText className="text-xl font-bold text-gray-800">
                  Jhon Doe
                </AppText>
                <AppText className="text-sm text-gray-500 mt-1">
                  jhondoe@gmail.com
                </AppText>
                <TouchableOpacity className="mt-2">
                  <AppText className="text-[#00CCBB] text-sm font-semibold">
                    View activity →
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>

            {/* Quick Actions */}
            <View className="flex-row justify-around mt-6 pt-6 border-t border-gray-100">
              <TouchableOpacity
                className="items-center"
                onPress={() => navigation.navigate("book_marks")}
              >
                <View className="w-12 h-12 bg-[#edf5f4] rounded-full items-center justify-center">
                  <Bookmark size={20} color="#00CCBB" />
                </View>
                <AppText className="text-xs text-gray-600 mt-2">
                  Bookmarks
                </AppText>
              </TouchableOpacity>

              <TouchableOpacity className="items-center" onPress={() => navigation.navigate("notifications")}>
                <View className="w-12 h-12 bg-[#edf5f4] rounded-full items-center justify-center">
                  <Bell size={20} color="#00CCBB" />
                </View>
                <AppText className="text-xs text-gray-600 mt-2">
                  Notifications
                </AppText>
              </TouchableOpacity>

              <TouchableOpacity className="items-center" onPress={() => navigation.navigate("settings")}>
                <View className="w-12 h-12 bg-[#edf5f4] rounded-full items-center justify-center">
                  <Settings size={20} color="#00CCBB" />
                </View>
                <AppText className="text-xs text-gray-600 mt-2">
                  Settings
                </AppText>
              </TouchableOpacity>

              <TouchableOpacity className="items-center" onPress={() => navigation.navigate("payment_settings")}>
                <View className="w-12 h-12 bg-[#edf5f4] rounded-full items-center justify-center">
                  <CreditCard size={20} color="#00CCBB" />
                </View>
                <AppText className="text-xs text-gray-600 mt-2">
                  Payment Settings
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Food Orders Section */}
        <View className="mx-4 mt-6">
          <View className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {firstSection.map((section, index) => (
              <TouchableOpacity
                key={section.id}
                className={`flex-row items-center justify-between px-5 py-4 ${
                  index !== firstSection.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
                onPress={section.onClick}
              >
                <View className="flex-row items-center">
                  {section.icon}
                  <AppText className="ml-3 text-gray-800 font-medium text-base">
                    {section.label}
                  </AppText>
                </View>
                <ChevronRight size={20} color="#9CA3AF" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mx-4 mt-6">
          <View className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {footerLinks.map((link, index) => (
              <TouchableOpacity
                key={link.id}
                className={`px-5 py-4 ${
                  index !== footerLinks.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
                onPress={link.onClick}
              >
                <AppText
                  className={`text-base ${
                    link.isLogout
                      ? "text-red-500 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </AppText>
              </TouchableOpacity>
            ))}
          </View>

          {/* Zomato Branding */}
          <View className="items-center mt-8 mb-6">
            <AppText className="text-gray-300 text-3xl font-bold tracking-wider">
              {appname}
            </AppText>
            <AppText className="text-gray-400 text-xs mt-1 tracking-widest">
              v {version}
            </AppText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
