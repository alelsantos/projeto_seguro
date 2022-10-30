import styled from 'styled-components/native'
import { Box, Text, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
export const Container = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const LoginBox = styled(VStack)`
  width: 100%;
  padding: 5%;
`