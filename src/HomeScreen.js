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
  LogBox,
} from "react-native";
import Swiper from "react-native-swiper";
import React, { useState, useEffect } from "react";
import { FoodCard } from "./components/FoodCard";
import { Banner } from "./components/Banner";
import { FoodCategories } from "./components/FoodCategories";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

var { width } = Dimensions.get("window");

export const HomeScreen = ({ navigation }) => {
  const [dataBanner, setDataBanner] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [selectCatg, setSelectCatg] = useState(0);
  const [dataFood, setDataFood] = useState([]);

  useEffect(async () => {
    const url = "http://tutofox.com/foodapp/api.json";
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setDataBanner(responseJson.banner);
      setDataCategories(responseJson.categories);
      setDataFood(responseJson.food);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ height: 40 }} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
            <View style={{ width: width, alignItems: "center" }}>
              <View style={{ height: 20 }} />
              <Banner itembanner={dataBanner} />
            </View>
            <View
              style={{
                width: width,
                borderRadius: 20,
                paddingVertical: 20,
                backgroundColor: "white",
              }}
            >
              <Text style={styles.titleCatg}>Categories {selectCatg}</Text>
              <FlatList
                horizontal={true}
                data={dataCategories}
                renderItem={({ item }) => {
                  return (
                    <FoodCategories item={item} setSelectCatg={setSelectCatg} />
                  );
                }}
                keyExtractor={(item, index) => String(index)}
                scrollEnabled={true}
              />
              <FlatList
                data={dataFood}
                numColumns={2}
                renderItem={({ item }) => {
                  return (
                    <FoodCard
                      item={item}
                      selectCatg={selectCatg}
                      navigation={navigation}
                    />
                  );
                }}
                keyExtractor={(item, index) => item.id}
                scrollEnabled={false}
              />
              <View style={{ height: 20 }} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  immageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  divCategorie: {
    backgroundColor: "red",
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
