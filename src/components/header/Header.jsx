/* eslint-disable no-constant-binary-expression */
import React, { useContext, useEffect } from "react";
import styles from "./header.module.css";
import Context from "../../context/context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/signin");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser")) || null;
    setLoggedInUser(user);
  }, []);

  return (
    <header className={styles.container}>
      <p>Your Personal HR Portal </p>

      {loggedInUser !== (undefined || null) ? (
        <div className={styles.userIsloggedINn}>
          <p>{loggedInUser?.name}</p>
          <button className={styles.logoutBtn} onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
