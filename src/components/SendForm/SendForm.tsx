import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput } from "react-native";

import Box from "../../theme/Box";
import Text from "../../theme/Text";

const Iota = require("@iota/core");

interface SendFormProps {}

export const SendForm = (props: SendFormProps) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  //   useEffect(() => {
  //     const iota = Iota.composeAPI({
  //       provider: "https://nodes.comnet.thetangle.org:443",
  //     });
  //     iota
  //       .getNodeInfo()
  //       // Convert the returned object to JSON to make the output more readable
  //       .then((info) => console.log(JSON.stringify(info, null, 1)))
  //       .catch((err) => {
  //         // Catch any errors
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <Box flex={1}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{
              color: "white",
              fontFamily: "Hind_400Regular",
              borderWidth: 1,
              height: 50,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              paddingLeft: 10,
            }}
            // placeholderTextColor={"white"}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            defaultValue={"Address"}
            onFocus={() => onChange("")}
            value={value}
          />
        )}
        name="address"
        rules={{ required: true }}
        defaultValue={true}
      />
      <Button title="Send" onPress={handleSubmit(onSubmit)} />
    </Box>
  );
};
