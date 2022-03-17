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
import Icon from "react-native-vector-icons/MaterialIcons";

var { width } = Dimensions.get("window");

export const DetailScreen = ({ navigation, route }) => {
  const food = route.params;
  return (
    <>
      <View style={{justifyContent: 'center'}}>
         <Icon name="arrow-back" size={30} style={{justifyContent: 'center', paddingTop: 30}}onPress={() => navigation.goBack()} />
      </View>
      <SafeAreaView style={styles.divFood}>
        <Image
          style={styles.imageFood}
          resizeMode="contain"
          source={{ uri: food.image }}
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
          {food.name}
        </Text>
        <Text>Descp Food and Details</Text>
        <Text style={{ fontSize: 20, color: "green" }}>${food.price}</Text>
      </SafeAreaView>
    </>
  );
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
    justifyContent: "center",
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: "white",
  },
});
