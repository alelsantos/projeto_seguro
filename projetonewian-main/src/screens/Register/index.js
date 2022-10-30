import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { InputField } from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import { Text, useToast } from "native-base";

import { Container, Heading, LoginBox } from "./styled";
import { useNavigation } from "@react-navigation/native";

export const RegisterScreen = ({ navigation }) => {
  const [itens, setItens] = useState({});
  const { register, user } = useAuth();
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

      const logged = await register(itens.email, itens.password);

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
      <Heading fontSize={35} bold>
        SignUp
      </Heading>
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
        <Button onPress={handleSubmit}>Register</Button>

        <Button variant="ghost" onPress={() => navigate("login")}>
          Go to Login
        </Button>
      </LoginBox>
    </Container>
  );
};
