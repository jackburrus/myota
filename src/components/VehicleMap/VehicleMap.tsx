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
      onRegionChangeComplete={(res) => console.log(res)}
      initialRegion={{
        latitude: 34.538787054668546,
        latitudeDelta: 0.007070239134421286,
        longitude: 69.19399034231901,
        longitudeDelta: 0.016222000122070312,
      }}
    >
      <Marker
        coordinate={{
          latitude: 34.538787054668546,
          longitude: 69.19567845761776,
        }}
        image={car}
      />
    </MapView>
  );
};
