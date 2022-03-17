
import React from "react";
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

var { width } = Dimensions.get("window");

export const Banner = ({itembanner}) => {
  return (
    <Swiper
      style={{ height: width / 2 }}
      showsButtons={false}
      autoplay={true}
      autoplayTimeout={2}
    >
      {itembanner.map((itemImage) => {
        return (
          <Image
            style={styles.immageBanner}
            resizeMode="contain"
            source={{ uri: itemImage }}
          />
        );
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
    immageBanner: {
      height: width / 2,
      width: width - 40,
      borderRadius: 10,
      marginHorizontal: 20,
    },
  });
  