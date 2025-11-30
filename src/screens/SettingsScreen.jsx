import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';

export default function SettingsScreen({navigation}) {
  const settingsOptions = [
    {
      id: 1,
      title: 'Edit profile',
      description: 'Change your name, description and profile photo',
    },
    {
      id: 3,
      title: 'Account settings',
      description: 'Delete your account.',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-4 py-4">
        <TouchableOpacity className="mb-6" onPress={() => navigation.pop()}>
          <ChevronLeft size={28} color="#000" />
        </TouchableOpacity>
        <AppText className="text-2xl font-semibold text-gray-900">Settings</AppText>
      </View>

      {/* Settings List */}
      <ScrollView className="flex-1">
        <View className="px-5 pt-6">
          {settingsOptions.map((option, index) => (
            <TouchableOpacity
              key={option.id}
              activeOpacity={0.7}
              className={`pb-6 ${
                index !== settingsOptions.length - 1 ? 'border-b border-gray-300 mb-6' : ''
              }`}
            >
              <View className="flex-row items-start justify-between">
                <View className="flex-1 pr-4">
                  <AppText className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </AppText>
                  <AppText className="text-sm text-gray-500 leading-5">
                    {option.description}
                  </AppText>
                </View>
                <ChevronRight size={24} color="#9CA3AF" className="mt-1" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}