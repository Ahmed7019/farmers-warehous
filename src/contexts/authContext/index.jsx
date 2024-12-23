import { useContext, useEffect, useState } from "react";
import React from "react";
import { auth } from "../../components/js/Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
      setIsLoading(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      setIsLoading(false);
    }
  }

  const value = {
    currentUser,
    userLoggedIn,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
