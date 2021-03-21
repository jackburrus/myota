import React from "react";

import Box from "../../theme/Box";
import Text from "../../theme/Text";

interface TransactionButtonProps {
  title: string;
  icon: null;
}

export const TransactionButton = (props: TransactionButtonProps) => {
  const { title, icon } = props;
  return (
    <Box
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
    </Box>
  );
};
