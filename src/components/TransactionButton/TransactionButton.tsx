import React from "react";

import { CustomPressable } from "../../theme/CustomPressable";
import Text from "../../theme/Text";

interface TransactionButtonProps {
  title: string;
  icon: null;
}

export const TransactionButton = (props: TransactionButtonProps) => {
  const { title, icon, handlePress } = props;
  return (
    <CustomPressable
      onPress={handlePress}
      borderWidth={0.5}
      borderRadius={8}
      width={150}
      height={100}
      marginLeft={"l"}
      marginRight={"l"}
      marginTop={"m"}
      justifyContent={"center"}
      alignItems={"center"}
      borderColor={"lineColor"}
    >
      {icon}
      <Text variant={"whiteText"}>{title}</Text>
    </CustomPressable>
  );
};
