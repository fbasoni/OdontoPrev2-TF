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
} from "./exports.js";
import { auth, db } from "./config.js";

export async function getAllPosts() {
  const collPost = query(
    collection(db, 'patients'),
    orderBy('data', 'desc'),
    orderBy('hour', 'desc'),
  );
  const postSnapshot = await getDocs(collPost);
  const listPost = postSnapshot.docs.map((docColl) => {
    const id = docColl.id;
    const data = docColl.data();
    const post = {
      id,
      ...data,
    };
    return post;
  });
  return listPost;
}
