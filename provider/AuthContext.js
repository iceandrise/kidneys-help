import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(undefined);
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useCheckoutContext must be used within a CheckoutContextProvider');
  }
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const logOut = () => setIsAuthorized(false);
  const logIn = () => {
    console.log(isAuthorized)
    setIsAuthorized(true)};

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
