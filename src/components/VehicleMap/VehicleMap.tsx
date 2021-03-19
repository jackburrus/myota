import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

import { device } from "../../constants";
import Box from "../../theme/Box";

interface VehicleMapProps {}

export const VehicleMap = (props: VehicleMapProps) => {
  return <MapView style={{ width: device.width - 50, height: 200 }} />;
};
