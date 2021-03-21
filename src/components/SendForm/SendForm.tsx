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
    <Box flex={1} borderWidth={1}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            // style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </Box>
  );
};
