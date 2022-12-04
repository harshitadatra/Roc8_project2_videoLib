import { createContext, useContext, useState } from "react";

const LikeContext = createContext({ like: [] });

export const LikeProvider = ({ children }) => {
  const [likes, setLike] = useState({ Like: [] });

  return (
    <LikeContext.Provider value={{ likes, setLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);