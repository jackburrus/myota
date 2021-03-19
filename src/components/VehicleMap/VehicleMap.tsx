import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

interface VehicleMapProps {}

export const VehicleMap = (props: VehicleMapProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MapView style={{ width: 200, height: 200 }} />
    </View>
  );
};
