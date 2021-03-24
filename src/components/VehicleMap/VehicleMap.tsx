import { useTheme } from "@shopify/restyle";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { CUSTOM_MAP } from "../../assets/CustomMap";
import MapMarker from "../../assets/MapMarker";
import { device } from "../../constants";
import { Theme } from "../../theme/PrimaryTheme";

interface VehicleMapProps {}

export const VehicleMap = (props: VehicleMapProps) => {
  const theme = useTheme<Theme>();
  const { successGreen } = theme.colors;

  return (
    <MapView
      style={{ width: device.width - 50, height: 200 }}
      provider={PROVIDER_GOOGLE}
      customMapStyle={CUSTOM_MAP}
      initialRegion={{
        latitude: 34.538056828330696,
        latitudeDelta: 0.007070239134421286,
        longitude: 69.1942635923624,
        longitudeDelta: 0.016222000122070312,
      }}
    >
      <Marker
        coordinate={{
          latitude: 34.53809217982894,
          longitude: 69.19414926320314,
        }}
      >
        <MapMarker />
      </Marker>
    </MapView>
  );
};
