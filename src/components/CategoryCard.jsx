import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const CategoryCard = ({item}) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image source={{
                uri: item?.imgUrl
            }}
             className="h-20 w-20 rounded"   
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{item.title} dada</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
