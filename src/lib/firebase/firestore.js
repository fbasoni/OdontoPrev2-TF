import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from "./export.js";
import { auth, db } from "./config.js";

export const createAppointment = async (date, patient) => {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      userId: auth.currentUser.uid,
      date: new Date().toLocaleDateString("pt-BR"),
      dentist: dentist,
      patient: patient,
      status: '',
    });
    return docRef.id;
  } catch (error) {
    return error;
  }
};