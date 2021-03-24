import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { useTheme } from "@shopify/restyle";
import Clipboard from "expo-clipboard";
import { AnimatePresence, View as MotiView } from "moti";
import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";

import { IotaChart } from "../../components/IotaChart";
import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import { SendForm } from "../../components/SendForm";
import { TransactionButton } from "../../components/TransactionButton";
import { device } from "../../constants";
import Box from "../../theme/Box";
import { CustomPressable } from "../../theme/CustomPressable";
import { ImageBox } from "../../theme/ImageBox";
import { Theme } from "../../theme/PrimaryTheme";
import Text from "../../theme/Text";

export const WalletScreen = ({ navigation }: DrawerScreenProps) => {
  const [receive, setReceive] = useState(false);
  const [copyVisible, toggleCopy] = useReducer((s) => !s, false);
  const [address, setAddress] = useState(
    "WXDTEUCUDFKYJUGIQJZKIDUVIWNTCZDBFOGIQZVQFNPYBQPWKI9HVL9V9ITMRS9OMAIBYAQXQOHFZWPP9"
  );

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleReceive = () => {
    setReceive(true);
    bottomSheetRef.current?.snapTo(1);
  };
  const handleSend = () => {
    setReceive(false);
    bottomSheetRef.current?.snapTo(1);
  };

  const snapPoints = useMemo(() => ["0%", "50%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const theme = useTheme<Theme>();
  const {
    primaryLight,

    accent,
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
          handlePress={handleSend}
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
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleComponent={() => (
          <Box style={{ alignSelf: "center", marginBottom: 10 }}>
            <Box
              style={{
                width: 40,
                height: 6,
                borderRadius: 3,
                backgroundColor: "white",
                marginTop: 9,
              }}
            />
          </Box>
        )}
        backgroundComponent={() => (
          <View
            style={{
              backgroundColor: primaryLight,
              ...StyleSheet.absoluteFillObject,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        )}
      >
        {receive ? (
          <Box
            flex={1}
            justifyContent={"space-around"}
            paddingTop={"xl"}
            paddingBottom={"xl"}
            alignItems={"center"}
            backgroundColor={"primaryLight"}
          >
            <AnimatePresence>
              {copyVisible && (
                <MotiView
                  style={{ position: "absolute", top: 30 }}
                  from={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                >
                  <Text variant={"title"} color={"successGreen"}>
                    Copied
                  </Text>
                </MotiView>
              )}
            </AnimatePresence>
            <CustomPressable
              width={device.width - 100}
              alignItems={"center"}
              onLongPress={() => {
                toggleCopy();
                Clipboard.setString(address);
              }}
            >
              <Text variant={"title"}>
                {address.slice(0, 10)}...{address.slice(70, 81)}
              </Text>
            </CustomPressable>

            <CustomPressable
              onLongPress={() => {
                toggleCopy();
                Clipboard.setString(address);
              }}
            >
              <ImageBox
                source={require("../../assets/QR.png")}
                width={300}
                height={300}
              />
            </CustomPressable>
          </Box>
        ) : (
          <SendForm />
        )}
      </BottomSheet>
    </Box>
  );
};
