import React, { useContext, useState } from "react";
import setItems from "./data";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(setItems);

  return <AppContext.Provider value={{ cart }}>{children}</AppContext.Provider>;
};

export const useGlobalContex = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
