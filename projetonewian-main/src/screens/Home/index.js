import { HStack, Image, Text, VStack } from "native-base";
import { useState } from "react";
import { Button } from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import { Container } from "./styled";
import {
  getCameraPermissionsAsync,
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  useCameraPermissions,
} from "expo-image-picker";
import { StorageServices } from "../../services/StorageServices";
import { AppBar } from "../../components/AppBar";
import { InputField } from "../../components/Input";
import { Picker } from "@react-native-picker/picker";

export const HomeScreen = () => {
  const { signOut } = useAuth();
  const [image, setImage] = useState(null);
  const [selected, setSelected] = useState("DEFAULT");
  const [status, requestPermisions] = useCameraPermissions();

  const selectFromCamera = async () => {
    if (status.granted) {
      const result = await launchCameraAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else if (status.canAskAgain) {
      requestPermisions();
    }
  };

  const selectFromGalery = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const sendToCloud = async () => {
    if (image) {
      const link = await StorageServices.uploadImage(image);

      console.log("\nDownload Link: ", link);
    }
  };

  return (
    <Container>
      <AppBar title={"Send Data"} />
      <VStack space={4} p={2}>
        <Text></Text>
        <VStack space={2} w={"full"} px={4}>
          <InputField placeholder="Item Name" />
          <InputField placeholder="Brand Name" />
          <InputField placeholder="Pushoned From" />
          <InputField placeholder="Date Of Purchase" />
          <InputField placeholder="Cost" />
          <Picker
            selectedValue={selected}
            onValueChange={(value) => setSelected(value)}
          >
            <Picker.Item label="Selecione" enabled={false} value={"DEFAULT"} />
            <Picker.Item label="Yes" value={true} />
            <Picker.Item label="No" value={false} />
          </Picker>
        </VStack>
        <VStack space={4} p={"4"}>
          <Text w={"full"} textAlign="center">
            Selecionar Imagem
          </Text>
          {image && <Image source={{ uri: image }} alt={"selectedImage"} />}
          <HStack space={4} W="full" justifyContent={"center"}>
            <Button onPress={selectFromGalery}>Galery Select</Button>
            <Button onPress={selectFromCamera}>Open Camera</Button>
          </HStack>
          <Button onPress={sendToCloud}>Send Data</Button>
        </VStack>
      </VStack>
    </Container>
  );
};
