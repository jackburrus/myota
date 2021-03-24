import React from "react";
import { StyleSheet, View } from "react-native";

import { device } from "../../constants";

import Graph from "./Graph";
import Footer from "./components/Footer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    // justifyContent: "flex-start",
    width: device.width,

    // borderWidth: 3,
  },
});

const IotaChart = () => {
  return (
    <View style={styles.container}>
      <Graph />
      {/* <Footer /> */}
    </View>
  );
};

export default IotaChart;
