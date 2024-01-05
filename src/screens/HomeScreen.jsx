import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'

const HomeScreen = ({navigation}) => {
    
    useLayoutEffect(() => {
       navigation.setOptions({
        headerShown: false,
       })
    }, [])

    return (
       <SafeAreaView>
        <View>
            <Image
              source={{
                uri: 'https://links.papareact.com/wru'
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

            <View>
                <Text>Deliver Now!</Text>
                <Text>Current Location</Text>
            </View>
        </View>
       </SafeAreaView>
    )
}

export default HomeScreen
