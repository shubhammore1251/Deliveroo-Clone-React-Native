import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderComponent from "../components/HeaderComponent";
import RecieptIcon from "../../assets/icons/custom/RecieptIcon";
import {
  ChatBubbleBottomCenterIcon,
  CreditCardIcon,
  HeartIcon,
  MapPinIcon,
  TicketIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
// import { v4 as uuidv4 } from 'uuid';

const Account = ({ navigation, route }) => {
  // const uniqueId = uuidv4();
  // console.log('Generated UUID:', uniqueId);

  const firstSection = [
    {
      id: 1,
      icon: <RecieptIcon color="gray" width={35} height={35} />,
      label: "Orders",
    },
    {
      id: 2,
      icon: <HeartIcon color="gray" size={35} />,
      label: "Favourites",
    },
  ];

  // const secondSection = [
  //   {
  //     id: 3,
  //     icon: <UserCircleIcon color="gray" size={35}/>,
  //     label: "My Details",
  //   },
  //   {
  //     id: 4,
  //     icon: <CreditCardIcon color="gray" size={35} />,
  //     label: "Payment Methods",
  //   },
  //   {
  //     id: 5,
  //     icon: <TicketIcon color="gray" size={35} />,
  //     label: "Vouchers and credit",
  //   },
  //   {
  //     id: 6,
  //     icon: <MapPinIcon color="gray" size={35} />,
  //     label: "Addresses",
  //   },
  //   {
  //     id: 7,
  //     icon: <ChatBubbleBottomCenterIcon color="gray" size={35} />,
  //     label: "Contact preferences",
  //   },
  // ];

  // const thirdSection = [
  //   {
  //     id: 8,
  //     label: "About Deliveroo for Android",
  //   },
  //   {
  //     id: 9,
  //     label: "Acknowledgements",
  //   },
  //   {
  //     id: 10,
  //     label: "Log out",
  //   },
  // ];

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

      <View className="bg-slate-50 flex-1">
        <View className="mt-4 border-y-2 border-gray-400 px-2 py-3 bg-white">
          {firstSection.map((section) => (
            <View
              key={section.id}
              className="flex-row items-center gap-x-2 mt-3 mx-1"
            >
              {section.icon}
              <Text className="text-base font-semibold">{section.label}</Text>
            </View>
          ))}
        </View>

        {/* <View className="mt-4 border-y-2 border-gray-400 px-2 py-3 bg-white">
          {secondSection.map((section) => (
            <View
              key={section.id}
              className="flex-row items-center gap-x-2 mt-3 mx-1"
            >
              {section.icon}
              <Text className="text-base font-semibold">{section.label}</Text>
            </View>
          ))}
        </View>

        <View className="mt-4 border-y-2 border-gray-400 px-2 py-3 bg-white">
          {thirdSection.map((section) => (
            <Text key={section.id} className="text-base font-semibold">
              {section.label}
            </Text>
          ))}
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Account;
