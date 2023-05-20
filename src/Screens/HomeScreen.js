import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Slider from "../Components/Slider";
import { AntDesign } from "@expo/vector-icons";
import FoodTypes from "../Components/FoodTypes";
import QuickFood from "../Components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotel from "../data/hotel";
import MenuItem from "../Components/MenuItem";

const HomeScreen = () => {
  const data = hotel;
  return (
    <ScrollView style={{ marginTop: 50 }}>
      {/* SearchBar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderRadius: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput
          atyle={{ fontSize: 17 }}
          placeholder="Search for Restaurant item or more"
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
      {/* Image Slider Compnent  */}
      <Slider />

      {/* Food Item Types Component */}
      <FoodTypes />

      {/* Quick Food Component */}
      <QuickFood />

      {/* Filter Buttons  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            borderWidth: 1,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text style={{ marginRight: 5 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
            borderWidth: 1,
          }}
        >
          <Text>Sort By Rating</Text>
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            borderWidth: 1,
            width: 120,
          }}
        >
          <Text>Sort By Price</Text>
        </Pressable>
      </View>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
