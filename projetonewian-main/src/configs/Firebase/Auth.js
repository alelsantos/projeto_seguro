import { FirebaseApp } from ".";
import { getAuth, connectAuthEmulator } from "firebase/auth";

export const auth = getAuth(FirebaseApp);