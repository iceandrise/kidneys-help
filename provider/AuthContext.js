import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebaseConfig';

export const AuthContext = createContext(undefined);
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useCheckoutContext must be used within a CheckoutContextProvider');
  }
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();
  const auth = getAuth(app);
  const logOut = async () => {
    setLoading(true);
    try {
      signOut(auth);
    } catch (error) {
      console.log('logOut', error);
    } finally {
      setLoading(false);
    }
  };
  const logIn = async (value, onSuccess) => {
    try {
      console.log('logIn');
      await signInWithEmailAndPassword(auth, value.email, value.password);
      onSuccess();
    } catch (error) {
      console.log(error);
      setUser(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      console.log('stateChanged');
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    return unsubscribeFromAuthStatusChanged;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized: Boolean(user),
        user,
        logIn,
        logOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
