import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  return (
    <div>
      <AuthContext.Provider
        value={{
          logged,
          setLogged,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export { AuthContext, AuthContextProvider };
