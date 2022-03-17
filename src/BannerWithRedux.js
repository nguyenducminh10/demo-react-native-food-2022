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
} from "react-native";
import Swiper from "react-native-swiper";
import React, { useState, useEffect } from "react";
import { getFoodBanner } from "./action/actions";
import { useSelector, useDispatch } from "react-redux";
import { Banner } from "./components/Banner";
var { width } = Dimensions.get("window");

export const BannerWithRedux = () => {
  const food = useSelector(state => state.food);
  console.log(food);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodBanner());
  }, []);

  return (
    <View style={{ width: width, alignItems: "center" }}>
      {/* <View style={{ height: 20 }} />
      <Banner itembanner={foodBanners} />
      <View style={{ height: 20 }} /> */}
    </View>
  );
};
