import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Swiper from "react-native-swiper";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
var { width } = Dimensions.get("window");

export const FoodCategories = ({ item, setSelectCatg }) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.divCategorie, { backgroundColor: item.color }]}
        onPress={() => setSelectCatg(item.id)}
      >
        <Image
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{item.name}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  divCategorie: {
    backgroundColor: "red",
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
});
