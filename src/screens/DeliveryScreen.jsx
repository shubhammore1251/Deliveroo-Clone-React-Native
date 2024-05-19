import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DeliveryScreen = ({navigation , route}) => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView
        style={{
            paddingTop: insets.top,
          }}>
            <Text>Delivery Screen</Text>
        </SafeAreaView>
    )
}

export default DeliveryScreen
