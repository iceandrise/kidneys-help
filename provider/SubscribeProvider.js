import React, { createContext, useContext, useState } from 'react';

export const SubscriptionProvider = createContext(undefined);
export const useSubscriptionContext = () => {
  const context = useContext(SubscriptionProvider);
  if (context === undefined) {
    throw new Error('useSubscriptionContext must be used within a SubscriptionContextProvider');
  }
  return context;
};

export const SubscriptionContextProvider = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubscribe = () => {
    setLoading(true);
    setTimeout(() => {
      setIsSubscribed(true);
      setLoading(false);
    }, 1000);
  };
  return (
    <SubscriptionProvider.Provider
      value={{
        onSubscribe,
        isSubscribed,
        loading,
      }}
    >
      {children}
    </SubscriptionProvider.Provider>
  );
};
