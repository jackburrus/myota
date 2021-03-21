import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";

import { device } from "../../constants";
import Box from "../../theme/Box";
import { CUSTOM_MAP } from "../../assets/CustomMap";
import car from "../../assets/car.png";
import { Theme } from "../../theme/PrimaryTheme";
import MapMarker from "../../assets/MapMarker";

interface VehicleMapProps {}

export const VehicleMap = (props: VehicleMapProps) => {
  const theme = useTheme<Theme>();
  const { successGreen } = theme.colors;

  return (
    <MapView
      style={{ width: device.width - 50, height: 200 }}
      provider={PROVIDER_GOOGLE}
      customMapStyle={CUSTOM_MAP}
      // onRegionChange={(res) => console.log(res)}

      initialRegion={{
        latitude: 34.538056828330696,
        latitudeDelta: 0.007070239134421286,
        longitude: 69.1942635923624,
        longitudeDelta: 0.016222000122070312,
      }}
      // initialRegion={{
      //   latitude: 34.538787054668546,
      //   latitudeDelta: 0.007070239134421286,
      //   longitude: 69.19399034231901,
      //   longitudeDelta: 0.016222000122070312,
      // }}
    >
      {/* <Polyline
        coordinates={[
          { latitude: 34.538056828330696, longitude: 69.1942635923624 },
          { latitude: 34.539895086332805, longitude: 69.1959372907877 },
        ]}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={["#238C23"]}
        strokeWidth={6}
      /> */}
      <Marker
        coordinate={{
          latitude: 34.53809217982894,
          longitude: 69.19414926320314,
        }}
        // coordinate={{
        //   latitude: 34.539895086332805,
        //   longitude: 69.1961233690381,
        // }}
      >
        <MapMarker />
        {/* <FontAwesome name="circle" size={24} color="black">
          <Entypo
            name="dot-single"
            size={34}
            color={successGreen}
            style={{ position: "absolute" }}
          />
        </FontAwesome> */}
        {/* <Image
          source={car}
          style={{ width: 30, height: 30, transform: [{ rotate: "35deg" }] }}
          resizeMode="contain"
        /> */}
      </Marker>
    </MapView>
  );
};
