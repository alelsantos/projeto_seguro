import { Box, HStack, StatusBar, Text } from "native-base";
import React from "react";
import styled from "styled-components/native";
import { Icon } from "../Icon";

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Content = styled(HStack)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Heading = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const AppBar = ({ title }) => {
  return (
    <>
      <StatusBar translucent />
      <Container bg={"darkBlue.500"} px={2} py={3} safeAreaTop>
        <Content space={2} p={1}>
          <Heading bold>{title}</Heading>
        </Content>
      </Container>
    </>
  );
};
