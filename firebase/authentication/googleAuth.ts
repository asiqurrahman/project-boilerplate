import { useContext, createContext, useState, useEffect } from "react";
import { userAuth } from "../init";
import { firestore } from "../init";

import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  getAdditionalUserInfo,
} from "firebase/auth";

import { setDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";

export default async function googleSignIn() {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(userAuth, provider);
  const userInfo = getAdditionalUserInfo(userCredential);

  if (userInfo && userInfo.isNewUser) {
    const uid = userCredential.user.uid;

    const userData = {
      uid: uid,
      name: userCredential.user.displayName,
      email: userCredential.user.email,
      photoURL: userCredential.user.photoURL,
      createdAt: serverTimestamp(),
    };

    const userCollection = doc(firestore, "users", uid);

    await setDoc(userCollection, {
      ...userData,
    });
  } else {
    console.log(userInfo);
  }
}

const logOut = () => {
  signOut(userAuth);
};
