import React from "react";
import { Button as NBButton } from "native-base";

export const Button = ({ onPress, ...rest }) => {
  return <NBButton onPress={onPress} {...rest} />;
};
