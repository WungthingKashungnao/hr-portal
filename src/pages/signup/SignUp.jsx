import React, { useContext } from "react";
import styles from "./singnUpStyle.module.css";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Context from "../../context/context";

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    isEmployee: false,
  });
  const { setLoggedInUser } = useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    for (const element of users) {
      if (element.name.toLowerCase() === userDetails.name.toLocaleLowerCase()) {
        console.log("ele name>>", element.name.toLowerCase());
        console.log("user name>>", userDetails.name.toLocaleLowerCase());
        toast.error("There is an existing user with the same name!", {
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
      }

      if (
        element.email.toLowerCase() === userDetails.email.toLocaleLowerCase()
      ) {
        toast.error("There is an existing user with the same email!", {
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
      }
    }

    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Successfully signed up!", {
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

    const updatedUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    updatedUser.name = userDetails.name;
    updatedUser.isLoggedIn = userDetails.isEmployee;

    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    setLoggedInUser(updatedUser);
    navigate("/");
  };

  return (
    <div className={styles.parentContainer}>
      <Header />
      <div className={styles.container}>
        <h2>Create an Account</h2>
        {/* <p>Your personal HR portal</p> */}
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="username"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
          />

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
            type="number"
            placeholder="1234567890"
            value={userDetails.mobile}
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
            onChange={(e) =>
              setUserDetails({ ...userDetails, mobile: e.target.value })
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

          <div className={styles.checkbox}>
            <div className={styles.inpt}>
              <input
                className={styles.isEmployee}
                type="checkbox"
                value={userDetails.isEmployee}
                onClick={() =>
                  setUserDetails({
                    ...userDetails,
                    isEmployee: !userDetails.isEmployee,
                  })
                }
              />
            </div>{" "}
            <div>
              <span>Signup as an employee</span>
            </div>
          </div>

          <button>Create Account</button>
          <div className={styles.link}>
            <p>
              Already have an account?{" "}
              <Link to={"/signin"} className={styles.singin}>
                Sign In
              </Link>{" "}
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
