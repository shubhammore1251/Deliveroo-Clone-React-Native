import React from 'react';
import { View, Text } from 'react-native';
import { Bookmark, ChevronLeft } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';

// Bookmarks Screen
export function BookmarksScreen({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 border-b border-gray-100">
        <ChevronLeft size={24} color="#000" onPress={() => navigation.pop()}/>
        <AppText className="text-xl font-semibold ml-3">Bookmarks</AppText>
      </View>

      {/* Empty State */}
      <View className="flex-1 items-center justify-center px-8">
        <View className="w-24 h-24 bg-gray-100 rounded-full items-center justify-center mb-6">
          <Bookmark size={40} color="#9CA3AF" strokeWidth={1.5} />
        </View>
        <AppText className="text-xl font-semibold text-gray-800 mb-2">
          No Bookmarks Yet
        </AppText>
        <AppText className="text-sm text-gray-500 text-center leading-5">
          Save your favorite restaurants and dishes here for quick access later
        </AppText>
      </View>
    </SafeAreaView>
  );
}
