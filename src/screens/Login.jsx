import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Login = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
      }}
      className="bg-white pt-5 flex-1"
    >
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;
