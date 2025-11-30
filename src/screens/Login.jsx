import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Mail } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";
import AppText from "../components/AppText";
import GoogleIcon from "../../assets/icons/custom/GoogleIcon";
import AppleIcon from "../../assets/icons/custom/AppleIcon";
import FBIcon from "../../assets/icons/custom/FBIcon";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  
  const handleLogin = () => {
    navigation.replace('home');
  };

  return (
    <View
      className="flex-1"
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Food Images Section - extends behind status bar */}
        <View className="items-center justify-center">
          <Image
            source={require("../../assets/images/food-image.png")}
            className="w-full h-96 rounded-bl-3xl rounded-br-3xl"
            resizeMode="cover"
          />
        </View>

        {/* White Card Section - respects safe area */}
        <SafeAreaView edges={["bottom"]} className="bg-white px-6 pt-6">
          {/* Title */}
          <AppText className="text-3xl font-bold text-gray-800 text-center mb-2">
            Welcome Back
          </AppText>
          <AppText className="text-base text-gray-500 text-center mb-6">
            Sign in to continue
          </AppText>

          {/* Email Input */}
          <View className="mb-4">
            <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
              <Mail size={20} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-800"
                placeholder="Enter Email Address"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>
          </View>

          {/* Continue Button */}
          <TouchableOpacity className="bg-[#00CCBB] rounded-lg py-4 items-center mb-4 shadow-sm" onPress={handleLogin}>
            <AppText className="text-white text-lg font-bold">Continue</AppText>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center my-4">
            <View className="flex-1 h-px bg-gray-200" />
            <AppText className="mx-4 text-gray-400 text-sm">or</AppText>
            <View className="flex-1 h-px bg-gray-200" />
          </View>

          {/* Social Login Buttons */}
          <View className="flex-row justify-center gap-4">
            <TouchableOpacity className="w-16 h-16 bg-white border border-gray-200 rounded-xl items-center justify-center shadow-sm" onPress={handleLogin}>
              <GoogleIcon />
            </TouchableOpacity>

            <TouchableOpacity className="w-16 h-16 bg-white border border-gray-200 rounded-xl items-center justify-center shadow-sm" onPress={handleLogin}>
              <AppleIcon />
            </TouchableOpacity>

            <TouchableOpacity className="w-16 h-16 bg-white border border-gray-200 rounded-xl items-center justify-center shadow-sm" onPress={handleLogin}>
              <FBIcon />
            </TouchableOpacity>
          </View>

          {/* Terms and Privacy */}
          <View className="mt-6">
            <AppText className="text-center text-xs text-gray-500 leading-5">
              By continuing, you agree to our{"\n"}
              <AppText className="text-gray-700 font-medium">
                Terms of Service
              </AppText>
              {" • "}
              <AppText className="text-gray-700 font-medium">Privacy Policy</AppText>
              {" • "}
              <AppText className="text-gray-700 font-medium">
                Content Policies
              </AppText>
            </AppText>
          </View>

          {/* Sign Up Link */}
          <View className="mt-6 pb-4 flex-row justify-center">
            <AppText className="text-gray-600 text-sm">
              Don't have an account?{" "}
            </AppText>
            <TouchableOpacity>
              <AppText className="text-[#00CCBB] text-sm font-semibold">
                Sign up
              </AppText>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
