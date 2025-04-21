import React from "react";
import styles from "./singnUpStyle.module.css";
import { useState } from "react";

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    isEmployee: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("users  >>>>>", users);
  };

  return (
    <div className={styles.container}>
      <h2>Create an Account</h2>
      <p>Your personal HR portal</p>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Name"
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
          <input
            type="checkbox"
            value={userDetails.isEmployee}
            onClick={() =>
              setUserDetails({
                ...userDetails,
                isEmployee: !userDetails.isEmployee,
              })
            }
          />{" "}
          <label>Signup as an employee</label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
