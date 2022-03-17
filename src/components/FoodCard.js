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
import AsyncStorage from '@react-native-async-storage/async-storage';

var { height, width } = Dimensions.get("window");




export const FoodCard = ({ item, selectCatg, navigation }) => {

  const onClickAddCart = (data) =>{
    const itemCart = {
      food: data,
      quantity: 1,
      price: data.price
    }
    AsyncStorage.getItem("cart").then((dataCart) => {
      if(dataCart !== null){
        const cart = JSON.parse(dataCart)
        cart.push(dataCart)
        AsyncStorage.setItem("cart", JSON.stringify(cart))
      }else{
        const cart = []
        cart.push(itemCart)
        AsyncStorage.setItem("cart", JSON.stringify(cart))
      }
      alert("Add successfull")
    }).catch((error) => {
      alert(error)
    })
  }

  let catg = selectCatg;
  if (catg == 0 || catg == item.categorie) {
    return (
      <TouchableOpacity
        style={styles.divFood}
        onPress={() => navigation.navigate("Detail", item)}
      >
        <Image
          style={styles.imageFood}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <View
          style={{
            height: width / 2 - 20 - 90,
            backgroundColor: "transparent",
            width: width / 2 - 20 - 10,
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
        <Text>Descp Food and Details</Text>
        <Text style={{ fontSize: 20, color: "green" }}>${item.price}</Text>
        <TouchableOpacity
          style={{
            width: width / 2 - 40,
            backgroundColor: "#33c37d",
            alignItems: "center",
            borderRadius: 5,
            padding: 5,
          }}
          onPress={() => onClickAddCart(item)} 
        >
          <Text style={{
            fontSize: 18,
            color: "white",
            fontWeight: "bold"
          }}>Add cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  imageFood: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  divFood: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: "white",
  },
});
