import React from "react";
import { View, TouchableOpacity, ScrollView, Image } from "react-native";
import { ChevronLeft, Plus, Trash2, CreditCard, PlusIcon } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../components/AppText";
import { cardOptions, savedUpi, upiOptions } from "../../data/data";

export default function PaymentSettingsScreen({navigation}) {

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-gray-300">
        <TouchableOpacity onPress={() => navigation.pop()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <AppText className="text-lg font-semibold text-gray-900 ml-4">
          Payment settings
        </AppText>
      </View>

      <ScrollView className="flex-1">
        {/* CARDS Section */}
        <View className="px-5 pt-6">
          <AppText className="text-base font-semibold tracking-widest text-gray-500 mb-4">
            CARDS
          </AppText>

          {cardOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200"
              activeOpacity={0.7}
            >
              <View className="shadow-md w-14 h-14 bg-gray-200 rounded-lg items-center justify-center mr-4 ">
                {option.icon === "card" ? (
                  <CreditCard size={24} color="#000" />
                ) : (
                  <AppText className="text-sm font-bold">pluxee</AppText>
                )}
              </View>
              <AppText className="flex-1 text-sm font-medium text-gray-900">
                {option.title}
              </AppText>
              {option.hasAdd && <Plus size={24} color="#E63946" />}
            </TouchableOpacity>
          ))}
        </View>

        {/* UPI Section */}
        <View className="px-5 pt-5">
          <AppText className="text-base font-semibold tracking-widest text-gray-500 mb-4">
            UPI
          </AppText>

          {upiOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200"
              activeOpacity={0.7}
            >
              <View
                className={`shadow-md w-14 h-14 ${option.color} rounded-lg items-center justify-center mr-4`}
              >
                <Image source={{ uri: option.logo }} className="w-10 h-10 rounded" resizeMode="contain" />
              </View>
              <AppText className="flex-1 text-base font-medium text-gray-900">
                {option.name}
              </AppText>
            </TouchableOpacity>
          ))}

          {/* Saved UPI */}
          <View className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200">
            <View className="shadow-md w-14 h-14 bg-white rounded-lg items-center justify-center mr-4">
              <Image source={{ uri: savedUpi.logo }} className="w-10 h-10 rounded" resizeMode="contain" />
            </View>
            <AppText className="flex-1 text-base font-medium text-gray-900">
              {savedUpi.id}
            </AppText>
            <TouchableOpacity>
              <Trash2 size={22} color="#666363ff" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200">
            <View className="shadow-md w-14 h-14 bg-white rounded-lg items-center justify-center mr-4">
              <Image source={{ uri: savedUpi.logo }} className="w-10 h-10 rounded" resizeMode="contain" />
            </View>
            <AppText className="flex-1 text-base font-medium text-gray-900">
              Add new UPI ID
            </AppText>
            <TouchableOpacity>
              <PlusIcon size={22} color="#fc0000ff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View className="h-24" />
      </ScrollView>
    </SafeAreaView>
  );
}
