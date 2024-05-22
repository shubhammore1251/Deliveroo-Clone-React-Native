import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderComponent from "../components/HeaderComponent";

const Account = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
      }}
      className="bg-white pt-5 flex-1"
    >
      <HeaderComponent
        title="Account"
        backButton
        bottomComponent={
          <Text className="text-sm">shubhamp1251@gmail.com</Text>
        }
      />
    </SafeAreaView>
  );
};

export default Account;
