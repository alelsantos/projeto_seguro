import { getFirestore } from "firebase/firestore";
import { FirebaseApp } from ".";

export const firestore = getFirestore(FirebaseApp);
