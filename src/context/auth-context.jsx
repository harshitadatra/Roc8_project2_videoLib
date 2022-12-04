import { createContext, useContext, useState } from "react";

const AuthContext = createContext({ user: null, token: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ users: null, token: null });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
