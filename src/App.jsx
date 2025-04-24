import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
