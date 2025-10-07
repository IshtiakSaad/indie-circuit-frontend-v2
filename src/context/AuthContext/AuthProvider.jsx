import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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
