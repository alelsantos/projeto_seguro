import React from "react";
import { Icon as NBIcon } from "native-base";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Icon = ({ name, ...rest }) => {
  return <NBIcon  as={<AntDesign name={name} />} {...rest} />;
};
