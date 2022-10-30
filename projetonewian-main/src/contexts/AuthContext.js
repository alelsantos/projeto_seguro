import { useNavigation } from "@react-navigation/native";
import { createContext, useEffect, useReducer, useState } from "react";
import { AuthServices } from "../services/AuthServices";

const INITIAL_STATE = {
  user: null,
  signIn: async (email, password) => false,
  register: async (email, password) => false,
  signOut: async () => {},
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    const unsubscribe = AuthServices.onAuthChanged((user) => {
      setUser(user);

      if (user) {
        console.log("Welcome,", user.email);
      }
    });

    return unsubscribe;
  }, []);

  const signIn = async (email, password) => {
    const user = await AuthServices.sigInWithEmail(email, password);
    if (!user) {
      return false;
    }

    setUser(user);

    return true;
  };

  const register = async (email, password) => {
    const user = await AuthServices.createUser(email, password);
    if (!user) return false;
    return true;
  };

  const signOut = async () => {
    await AuthServices.signOut();
    navigate("login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        register,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
