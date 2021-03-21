import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput } from "react-native";

import Box from "../../theme/Box";
import Text from "../../theme/Text";

interface SendFormProps {}

export const SendForm = (props: SendFormProps) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box flex={1}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{
              color: "grey",
              borderWidth: 1,
              height: 50,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
            }}
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
