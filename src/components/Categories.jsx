import { View, Text, FlatList } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const data = [
  {
    id: 1,
    imgUrl:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    title: "Test 1",
  },
  {
    id: 2,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocQpyNsMFVLkzaCjRDwM2Q0difeMHxQRFQAnf5SC2dyLBhqKas59C9Qk4YKFoxL7jVws&usqp=CAU",
    title: "Test 2",
  },
  {
    id: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLaQovPsCNb5WpRleT6LRDJ6roep6zFrFcw&usqp=CAU",
    title: "Test 3",
  },
  {
    id: 4,
    imgUrl: "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
    title: "Test 4",
  },
  {
    id: 5,
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1667458982443-N6XGU1PU7335QEMVUP7M/Delicious+food.png",
    title: "Test 5",
  },
];

const Categories = () => {
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => <CategoryCard item={item} />}
    />
  );
};

export default Categories;
