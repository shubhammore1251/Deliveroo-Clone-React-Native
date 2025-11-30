import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronDown, ChevronRight, Plus, Home, Briefcase, MoreHorizontal, Share2 } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';

export default function MyAddressesScreen({navigation}) {
  const addresses = [
  {
    id: 1,
    type: "Home",
    icon: "home",
    address:
      "B-702, Rosewood Apartments, Lokhandwala Complex, Andheri West, Mumbai 400053",
    distance: "0 m",
    phone: "+91-9867123456"
  },
  {
    id: 2,
    type: "Work",
    icon: "work",
    address:
      "902, Spectrum Tower, Mindspace, Malad West, Mumbai 400064",
    distance: "7.8 km",
    phone: "+91-9867123456"
  },
  {
    id: 3,
    type: "Other",
    icon: "other",
    address:
      "12, Hill Road, Near St. Andrew’s Church, Bandra West, Mumbai 400050",
    distance: "4.6 km",
    phone: "+91-9867123456"
  }
];


  const renderIcon = (type) => {
    if (type === "Home") {
      return <Home size={28} color="#666" strokeWidth={1.5} />;
    } else if (type === "Work") {
      return <Briefcase size={28} color="#666" strokeWidth={1.5} />;
    }
    return <Home size={28} color="#666" strokeWidth={1.5} />;
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 bg-white">
        <ChevronDown size={28} color="#000" onPress={() => navigation.pop()}/>
        <AppText className="text-2xl font-bold ml-3 text-gray-900">
          My Addresses
        </AppText>
      </View>

      <ScrollView className="flex-1">
        {/* Action Buttons */}
        <View className="mt-4 mx-4">
          {/* Add Address */}
          <TouchableOpacity className="bg-white rounded-xl p-4 mb-3 flex-row items-center justify-between shadow-sm">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-red-50 rounded-full items-center justify-center mr-3">
                <Plus size={24} color="#E63946" strokeWidth={2} />
              </View>
              <AppText className="text-base font-semibold text-red-500">
                Add Address
              </AppText>
            </View>
            <ChevronRight size={24} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Saved Addresses Section */}
        <View className="mt-6 px-4">
          <AppText className="text-sm font-semibold tracking-wider mb-3 text-gray-400">
            SAVED ADDRESSES
          </AppText>

          {/* Address List */}
          {addresses.map((address) => (
            <View key={address.id} className="bg-white rounded-xl p-4 mb-3 shadow-sm">
              <View className="flex-row">
                {/* Icon and Distance */}
                <View className="items-center mr-3 pt-1">
                  {renderIcon(address.type)}
                  <AppText className="text-xs mt-2 text-gray-400">
                    {address.distance}
                  </AppText>
                </View>

                {/* Address Details */}
                <View className="flex-1">
                  <AppText className="text-lg font-semibold mb-2 text-gray-900">
                    {address.type}
                  </AppText>
                  <AppText className="text-sm leading-5 mb-2 text-gray-600">
                    {address.address}
                  </AppText>
                  {address.phone && (
                    <AppText className="text-sm text-gray-600">
                      Phone number: <AppText className="font-medium">{address.phone}</AppText>
                    </AppText>
                  )}

                  {/* Action Buttons */}
                  <View className="flex-row mt-3">
                    <TouchableOpacity className="w-10 h-10 border border-gray-200 rounded-full items-center justify-center mr-3">
                      <MoreHorizontal size={20} color="#E63946" />
                    </TouchableOpacity>
                    <TouchableOpacity className="w-10 h-10 border border-gray-200 rounded-full items-center justify-center">
                      <Share2 size={18} color="#E63946" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Bottom Spacing */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
}