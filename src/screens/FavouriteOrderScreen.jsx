import React from 'react';
import { View } from 'react-native';
import { Heart, ChevronLeft } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';

export function FavouriteOrdersScreen({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 border-b border-gray-100">
        <ChevronLeft size={24} color="#000" onPress={() => navigation.pop()}/>
        <AppText className="text-xl font-semibold ml-3">Favourite Orders</AppText>
      </View>

      {/* Empty State */}
      <View className="flex-1 items-center justify-center px-8">
        <View className="w-24 h-24 bg-red-50 rounded-full items-center justify-center mb-6">
          <Heart size={40} color="#E63946" strokeWidth={1.5} />
        </View>
        <AppText className="text-xl font-semibold text-gray-800 mb-2">
          No Favourite Orders
        </AppText>
        <AppText className="text-sm text-gray-500 text-center leading-5">
          Mark your go-to orders as favorites and reorder them with just one tap
        </AppText>
      </View>
    </SafeAreaView>
  );
}