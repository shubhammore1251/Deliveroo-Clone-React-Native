import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import AppText from "./AppText";

const HeaderComponent = ({
  backButton,
  title,
  rightButton,
  bottomComponent,
}) => {
  const navigation = useNavigation();
  return (
    <View className="w-full p-1 bg-white">
      <View className="flex-row items-center justify-between p-2 border-b border-gray-300">
        {backButton ? (
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <ArrowLeftIcon color="#00CCBB" size={25} />
          </TouchableOpacity>
        ) : (
          <View className="w-10" />
        )}

        <View className="flex-1 items-start mx-2">
          {title ? <AppText className="text-sm font-bold">{title}</AppText> : null}

          {bottomComponent ? <View className="">{bottomComponent}</View> : null}
        </View>

        {rightButton ? (
          <TouchableOpacity onPress={rightButton.onPress} className="p-2">
            {rightButton.component}
          </TouchableOpacity>
        ) : (
          <View className="w-10" />
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;
