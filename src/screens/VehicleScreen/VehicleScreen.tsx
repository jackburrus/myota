import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface VehicleScreenProps {}

const VehicleScreen = (props: VehicleScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>VehicleScreen</Text>
    </View>
  );
};

export default VehicleScreen;
