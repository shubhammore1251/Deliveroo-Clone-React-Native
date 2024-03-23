import { View, Text, FlatList } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";

const restaurantData = [
    {
      id: 1,
      imageUrl: 'https://www.thedailymeal.com/img/gallery/what-classic-american-dish-have-you-never-tried/intro-1678808409.jpg',
      title: 'Delicious Delights',
      rating: 4.5,
      genre: 'American',
      address: '123 Main St, City, State',
      short_description: 'A taste of home with a twist.',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    {
      id: 2,
      imageUrl: 'https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg',
      title: 'Sushi Sensation',
      rating: 4.7,
      genre: 'Japanese',
      address: '456 Elm St, City, State',
      short_description: 'Fresh sushi prepared daily.',
      latitude: 34.0522,
      longitude: -118.2437,
    },
    {
      id: 3,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8CJzksifVdnRbrX45fQmSo43tE8zuu2LTg&usqp=CAU',
      title: 'Taco Time',
      rating: 4.2,
      genre: 'Mexican',
      address: '789 Oak St, City, State',
      short_description: 'Spice up your day with tacos!',
      latitude: 29.7604,
      longitude: -95.3698,
    },
    {
      id: 4,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0516/5052/7402/files/real_pizza_from_italy_480x480.jpg',
      title: 'Pizza Palace',
      rating: 4.9,
      genre: 'Italian',
      address: '101 Pine St, City, State',
      short_description: 'The best pizza in town.',
      latitude: 41.8781,
      longitude: -87.6298,
    },
  ];

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <FlatList
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        data={restaurantData}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <ResturantCard item={item} />}
      />
    </View>
  );
};

export default FeaturedRow;
