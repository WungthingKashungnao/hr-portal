import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
import Context from "./context/context";
import { useContext } from "react";

function App() {
  const { loggedInUser } = useContext(Context);

  return (
    <div className={styles.App}>
      <Routes>
        <Route
          path="/"
          element={loggedInUser !== (undefined || null) ? <Home /> : <SignIn />}
        ></Route>
        <Route
          path="/signup"
          element={loggedInUser !== (undefined || null) ? <Home /> : <SignUp />}
        ></Route>
        <Route
          path="/signin"
          element={loggedInUser !== (undefined || null) ? <Home /> : <SignIn />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
