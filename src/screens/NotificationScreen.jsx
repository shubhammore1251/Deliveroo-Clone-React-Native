import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';

// Custom Toggle Switch Component
function ToggleSwitch({ value, onValueChange }) {
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  const toggleSwitch = () => {
    const newValue = !value;
    onValueChange(newValue);

    Animated.timing(animatedValue, {
      toValue: newValue ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleSwitch}
      className={`w-12 h-7 rounded-full justify-center ${
        value ? 'bg-[#00CCBB]' : 'bg-gray-300'
      }`}
    >
      <Animated.View
        className="w-5 h-5 bg-white rounded-full shadow-sm"
        style={{
          transform: [{ translateX }],
        }}
      />
    </TouchableOpacity>
  );
}

// Notifications Settings Screen
export default function NotificationsScreen({navigation}) {
  const [notifications, setNotifications] = useState({
    enableNotifications: true,
    emailAlerts: false,
    orderAlerts: false,
    generalAlerts: true,
  });

  const toggleSetting = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const settingsList = [
    {
      id: 'enableNotifications',
      title: 'Enable Notifications',
      description: 'You will receive new updates.',
      value: notifications.enableNotifications,
    },
    {
      id: 'emailAlerts',
      title: 'Email Alerts',
      description: 'Expect various daily & news link.',
      value: notifications.emailAlerts,
    },
    {
      id: 'orderAlerts',
      title: 'Order Alerts',
      description: "You'll receive updates every day.",
      value: notifications.orderAlerts,
    },
    {
      id: 'generalAlerts',
      title: 'General Alerts',
      description: 'Expect various daily updates.',
      value: notifications.generalAlerts,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-4 border-b border-gray-100">
        <View className="flex-row items-center">
          <ChevronLeft size={24} color="#000" onPress={() => navigation.pop()}/>
          <AppText className="text-xl font-semibold ml-3">Notifications</AppText>
        </View>
      </View>

      {/* Settings List */}
      <View className="mt-4 mx-4">
        {settingsList.map((setting, index) => (
          <View
            key={setting.id}
            className={`bg-white px-4 py-4 ${
              index === 0 ? 'rounded-t-xl' : ''
            } ${
              index === settingsList.length - 1 ? 'rounded-b-xl' : 'border-b border-gray-100'
            }`}
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-1 pr-4">
                <AppText className="text-base font-semibold text-gray-900 mb-1">
                  {setting.title}
                </AppText>
                <AppText className="text-sm text-gray-500 leading-5">
                  {setting.description}
                </AppText>
              </View>
              <ToggleSwitch
                value={setting.value}
                onValueChange={() => toggleSetting(setting.id)}
              />
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}