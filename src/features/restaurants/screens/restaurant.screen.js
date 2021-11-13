import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar, Button } from "react-native-paper";

import QRCodeBar from "../components/qrcode-bar.component";

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <View style={styles.screenStyle}>
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.searchStyle}>
          <Searchbar
            placeholder="Search"
            value={searchQuery}
            onChangeText={onChangeSearch}
          />
          <QRCodeBar name="WornOffKeys.com" />
          {/* <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Press me
          </Button> */}
        </View>

        <View style={styles.listStyle}>
          <Text>{searchQuery}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    backgroundColor: "#F78812",
  },
  containerStyle: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#F78812",
  },
  searchStyle: {
    padding: 16,
  },
  listStyle: {
    flexGrow: 1,
  },
});

export default RestaurantScreen;
