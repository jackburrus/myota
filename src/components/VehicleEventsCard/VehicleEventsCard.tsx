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
      marginTop={"m"}
    >
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Box
          height={45}
          width={45}
          backgroundColor={"primaryMid"}
          borderRadius={10}
          marginLeft={"s"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {icon}
        </Box>
      </Box>
      <Box flex={2} justifyContent={"center"}>
        <Text variant="whiteText">{eventType}</Text>
        <Text variant="title">{date}</Text>
      </Box>
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        {incoming ? (
          <Text
            color="successGreen"
            fontSize={16}
            fontFamily={"Hind_500Medium"}
          >
            +{price} i
          </Text>
        ) : (
          <Text color="failureRed" fontSize={16} fontFamily={"Hind_500Medium"}>
            -{price} i
          </Text>
        )}
      </Box>
    </Box>
  );
};
