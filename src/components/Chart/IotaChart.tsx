import React from "react";
import { StyleSheet, View } from "react-native";

import { device } from "../../constants";

import Graph from "./Graph";
import Footer from "./components/Footer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",

    width: device.width,
  },
});

const IotaChart = () => {
  return (
    <View style={styles.container}>
      <Graph />
    </View>
  );
};

export default IotaChart;
