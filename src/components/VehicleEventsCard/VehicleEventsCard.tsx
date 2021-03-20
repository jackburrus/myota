import React from "react";

import Box from "../../theme/Box";
import Text from "../../theme/Text";

interface VehicleEventsCardProps {
  price: number;
  incoming: boolean;
  date: string;
  eventType: string;
  icon: null;
}

export const VehicleEventsCard = (props: VehicleEventsCardProps) => {
  const { price, incoming, date, eventType, icon } = props;
  return (
    <Box
      height={80}
      borderRadius={12}
      backgroundColor={"primaryLight"}
      flexDirection={"row"}
    >
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Box
          height={45}
          width={45}
          backgroundColor={"primaryMid"}
          borderRadius={10}
          marginLeft={"s"}
        >
          <Text>Icon</Text>
        </Box>
      </Box>
      <Box flex={2} justifyContent={"center"}>
        <Text>Transaction</Text>
      </Box>
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text>Price</Text>
      </Box>
    </Box>
  );
};
