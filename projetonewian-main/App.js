import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import Routes from "./src/routes";
import { LogBox } from "react-native";
import { AuthProvider } from "./src/contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

LogBox.ignoreLogs(["AsyncStorage has been extracted"]);

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
          <StatusBar style="auto" />
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
