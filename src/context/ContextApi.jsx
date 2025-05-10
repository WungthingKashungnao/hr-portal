import { useState } from "react";

import Context from "./context";

// Create provider component
export const ContextApi = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <Context.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </Context.Provider>
  );
};

// export default ContextApi;
