import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import BottomSheet, { useBottomSheet } from "@gorhom/bottom-sheet";
import { MY_SECRET_SEED } from "@env";
import Clipboard from "expo-clipboard";
import { AnimatePresence, View as MotiView } from "moti";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import { IotaChart } from "../../components/IotaChart";
// import IotaChart from "../../components/Chart";
import { TransactionButton } from "../../components/TransactionButton";
import { device } from "../../constants";
import { Theme } from "../../theme/PrimaryTheme";
import { ImageBox } from "../../theme/ImageBox";
import { SendForm } from "../../components/SendForm";
import Text from "../../theme/Text";
import { CustomPressable } from "../../theme/CustomPressable";

const Iota = require("@iota/core");

const iota = Iota.composeAPI({
  provider: "https://nodes.comnet.thetangle.org:443",
});
export const WalletScreen = ({ navigation }: DrawerScreenProps) => {
  const [receive, setReceive] = useState(false);
  const [copyVisible, toggleCopy] = useReducer((s) => !s, false);
  const [address, setAddress] = useState(
    "WXDTEUCUDFKYJUGIQJZKIDUVIWNTCZDBFOGIQZVQFNPYBQPWKI9HVL9V9ITMRS9OMAIBYAQXQOHFZWPP9"
  );
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleReceive = () => {
    setReceive(true);
    bottomSheetRef.current?.snapTo(1);
  };
  const handleSend = () => {
    setReceive(false);
    bottomSheetRef.current?.snapTo(1);
  };

  // useEffect(() => {
  //   iota
  //     .getNewAddress(MY_SECRET_SEED, {
  //       index: 0,
  //       securityLevel: 2,
  //       total: 1,
  //     })
  //     .then((adr) => {
  //       setAddress(adr);
  //       console.log("Your address is: " + adr);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const snapPoints = useMemo(() => ["0%", "50%"], []);

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
