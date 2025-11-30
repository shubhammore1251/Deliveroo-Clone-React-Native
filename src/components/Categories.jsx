import { View, Text, FlatList } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryData } from "../../data/ResturantData";

const Categories = () => {
  return (
    <FlatList
      horizontal
      data={categoryData}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      keyExtractor={(item) => `${item._id}`}
      renderItem={({ item }) => <CategoryCard item={item} />}
    />
  );
};

export default Categories;
