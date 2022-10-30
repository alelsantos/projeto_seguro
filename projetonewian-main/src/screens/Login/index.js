import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { InputField } from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import { Text, useToast } from "native-base";

import { Container, LoginBox } from "./styled";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = ({ navigation }) => {
  const [itens, setItens] = useState({});
  const { signIn, user } = useAuth();
  const toast = useToast();
  const { navigate } = useNavigation();

  useEffect(() => {
    if (user) {
      navigation.push("home");
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!itens?.password || !itens?.email) {
        throw new Error("Dados incompletos!");
      }

      const logged = await signIn(itens.email, itens.password);

      if (!logged) throw new Error("Erro ao autenticar");

      toast.show({
        description: "Logado com sucesso!",
      });
    } catch (err) {
      toast.show({
        description: err.message,
      });
    }
  };

  return (
    <Container>
      <Text fontSize={35} bold>
        SignIn
      </Text>
      <LoginBox space={2}>
        <InputField
          iconName={"user"}
          onChange={(email) =>
            setItens({
              ...itens,
              email,
            })
          }
          placeholder={"Email"}
        />
        <InputField
          iconName={"lock"}
          type="password"
          onChange={(password) =>
            setItens({
              ...itens,
              password,
            })
          }
          placeholder={"Password"}
        />
        <Button onPress={handleSubmit}>Login</Button>

        <Button variant="ghost" onPress={() => navigate("register")}>
          Go To Register
        </Button>
      </LoginBox>
    </Container>
  );
};
