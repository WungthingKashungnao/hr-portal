import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
