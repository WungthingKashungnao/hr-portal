import React, { useState } from "react";
import styles from "./signInStyle.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Header from "../../components/header/header";

const SignIn = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("email>>>", userDetails.email);
    console.log("password>>>", userDetails.password);
    console.log("users>>>>", users);

    for (const element of users) {
      if (
        element.email === userDetails.email &&
        element.password === userDetails.password
      ) {
        toast.success("Successfully signed in!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        navigate("/");
      }
    }

    toast.error("Invalid email or password!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    return;
  };

  return (
    <div className={styles.parentContainer}>
      <Header />
      <div className={styles.container}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            placeholder="example@mail.com"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />

          <input
            required
            type="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />

          <button>Login</button>
          <div className={styles.link}>
            <p>
              Don't have an account?{" "}
              <Link to={"/signup"} className={styles.singup}>
                Sign Up
              </Link>
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignIn;
