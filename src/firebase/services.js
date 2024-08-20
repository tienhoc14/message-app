import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const addDocument = (table, data) => {
  addDoc(collection(db, table), {
    ...data,
    createAt: serverTimestamp()
  });
};