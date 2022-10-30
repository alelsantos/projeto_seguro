import { Input } from "native-base";
import React from "react";
import { Icon } from "./Icon";

export const InputField = ({
  iconName = "",
  size,
  type = "text",
  onChange = (text) => {},
  ...rest
}) => {
  return (
    <Input
      size={size}
      type={type}
      onChangeText={onChange}
      InputLeftElement={iconName && <Icon ml="3" name={iconName} />}
      {...rest}
    />
  );
};
