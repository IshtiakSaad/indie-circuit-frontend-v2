import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  // Sync user to backend
  const syncUserToBackend = async (firebaseUser) => {
    if (!firebaseUser) return;

    try {
      // Get Firebase ID token for secure backend requests (optional but recommended)
      const token = await firebaseUser.getIdToken();

    //   console.log("Firebase User: ",firebaseUser)

      // Prepare user data for backend
      const userData = {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || "Anonymous",
        email: firebaseUser.email,
        role: "mentee", // default role; you can update later via user profile
        field: "blank",
      };

    //   console.log("userData: ", userData);

      // Send user data to backend
      const res = await fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // optional, for backend auth
        },
        body: JSON.stringify(userData),
      });

    //   console.log(res);



      if (!res.ok) {
        const errData = await res.json();
        console.error("User sync failed:", errData);
      } else {
        console.log("User synced successfully");
      }
    } catch (error) {
      console.error("Error syncing user:", error);
    }
  };

  // Monitor Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        await syncUserToBackend(currentUser);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //   Handle Logout. Accessible from anywhere in the SPA.
  const logoutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
