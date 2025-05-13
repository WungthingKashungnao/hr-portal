import { useState } from "react";

import Context from "./context";

// Create provider component
export const ContextApi = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [addEmployee, setAddEmployee] = useState(false);

  return (
    <Context.Provider
      value={{ loggedInUser, setLoggedInUser, addEmployee, setAddEmployee }}
    >
      {children}
    </Context.Provider>
  );
};

// export default ContextApi;
