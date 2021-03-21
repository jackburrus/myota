import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import BottomSheet from "@gorhom/bottom-sheet";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import { IotaChart } from "../../components/IotaChart";
import Rainbow from "../../components/Chart";
import { TransactionButton } from "../../components/TransactionButton";
import { device } from "../../constants";
import { Theme } from "../../theme/PrimaryTheme";

export const WalletScreen = ({ navigation }: DrawerScreenProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleReceive = () => bottomSheetRef.current?.snapTo(2);

  // variables
  const snapPoints = useMemo(() => ["0%", "25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const theme = useTheme<Theme>();
  const {
    primaryLight,
    lineColor,
    accent,
    successGreen,
    neutralYellow,
    white,
  } = theme.colors;
  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor="primaryDark"
      paddingTop={"xl"}
    >
      <MenuToggleButton drawerNavigation={navigation} />

      <IotaChart />

      <Box
        flex={0.3}
        flexDirection={"row"}
        width={device.width}
        justifyContent={"center"}
      >
        <TransactionButton
          title="Receive"
          handlePress={handleReceive}
          icon={
            <MaterialIcons
              name="move-to-inbox"
              size={28}
              color={accent}
              style={{ marginBottom: 5 }}
            />
          }
        />
        <TransactionButton
          title="Send"
          handlePress={() => console.log("pressed send")}
          icon={
            <Ionicons
              name="md-send"
              size={24}
              color={accent}
              style={{ marginBottom: 5 }}
            />
          }
        />
      </Box>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </Box>
  );
};
