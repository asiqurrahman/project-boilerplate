import { useState, useEffect } from "react";
import { userAuth } from "../init";
import { firestore } from "../init";

import { doc, getDoc } from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import { updateUser } from "@/reduxStore/userSlice";

function AuthState({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = onAuthStateChanged(userAuth, (currentUser: any) => {
      async function getUserData() {
        if (currentUser) {
          const uid = currentUser.uid;

          const userDocRef = doc(firestore, "users", uid);

          try {
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
              dispatch(updateUser(userDocSnapshot.data()));
            } else {
              console.log("User document does not exist.");
            }
          } catch (error) {
            console.error("Error fetching user document:", error);
          }
        }
      }
      getUserData();
    });
    return () => subscribe();
  }, [dispatch]);

  return <>{children}</>;
}

export default AuthState;
