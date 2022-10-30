import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../configs/Firebase/Auth";

export const AuthServices = {
  sigInWithEmail: async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (err) {
      throw err;
    }
  },
  createUser: async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return response;
    } catch (err) {
      throw err;
    }
  },
  signOut: () => signOut(auth),
  onAuthChanged: (callback = (user) => {}) =>
    onAuthStateChanged(auth, callback),
};
