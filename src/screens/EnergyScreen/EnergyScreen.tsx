import React from "react";

import MenuToggleButton from "../../components/MenuToggleButton/MenuToggleButton";
import Box from "../../theme/Box";
import { CustomSafeAreaView } from "../../theme/CustomSafeAreaView";
import Text from "../../theme/Text";

interface EnergyScreenProps {}

export const EnergyScreen = ({ navigation }: EnergyScreenProps) => {
  return (
    <Box flex={1} justifyContent={"center"} backgroundColor={"primaryDark"}>
      <MenuToggleButton drawerNavigation={navigation} />
      <Box flex={1}>
        <Text>Summary</Text>
      </Box>
      <Box flex={1}>
        <Text>Daily</Text>
      </Box>
      <Box flex={1} borderWidth={1}>
        <Box flexDirection={"row"} flex={1}>
          <Box
            flex={1}
            borderRightWidth={0.2}
            borderColor={"lineColor"}
            marginTop={"l"}
            // marginLeft={"l"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text marginLeft={"l"}>Capacity</Text>
          </Box>
          <Box
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"l"}
            // paddingRight={"l"}
          >
            <Text marginRight={"l"}>Capacity</Text>
          </Box>
        </Box>
        <Box flexDirection={"row"} flex={1}>
          <Box
            flex={1}
            borderTopWidth={0.2}
            borderColor={"lineColor"}
            marginLeft={"l"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRightWidth={0.2}
            marginBottom={"l"}
          >
            <Text>Capacity</Text>
          </Box>
          <Box
            flex={1}
            borderTopWidth={0.2}
            borderColor={"lineColor"}
            marginRight={"l"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>Capacity</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
