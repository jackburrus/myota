import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { device } from "../../constants";
import Box from "../../theme/Box";
import { CUSTOM_MAP } from "../../assets/CustomMap";
import car from "../../assets/car.png";
interface VehicleMapProps {}

export const VehicleMap = (props: VehicleMapProps) => {
  return (
    <MapView
      style={{ width: device.width - 50, height: 200 }}
      provider={PROVIDER_GOOGLE}
      customMapStyle={CUSTOM_MAP}
      // onRegionChangeComplete={(res) => console.log(res)}
      initialRegion={{
        latitude: 34.537142608229715,
        latitudeDelta: 0.10544141398184337,
        longitude: 69.191691018641,
        longitudeDelta: 0.21760091185569763,
      }}
    >
      <Marker
        coordinate={{
          latitude: 34.537142608229715,
          longitude: 69.191691018641,
        }}
        image={car}
      />
    </MapView>
  );
};
