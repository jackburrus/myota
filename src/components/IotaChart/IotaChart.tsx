import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";

import Rainbow from "../Chart";
interface IotaChartProps {}

export const IotaChart = (props: IotaChartProps) => {
  return (
    <View>
      <Rainbow />
    </View>
  );
};
