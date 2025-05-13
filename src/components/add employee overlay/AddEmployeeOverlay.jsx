import React, { useContext, useState } from "react";
import Context from "../../context/context";
import styles from "./addEmployeeOverlay.module.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

const AddEmployeeOverlay = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    password: "",
    isEmployee: true,
  });
  const { setAddEmployee } = useContext(Context);

  const addEmployeeSubmit = async (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    for (const element of users) {
      if (
        element.name.toLowerCase() === employeeDetails.name.toLocaleLowerCase()
      ) {
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
        element.email.toLowerCase() ===
        employeeDetails.email.toLocaleLowerCase()
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

    users.push(employeeDetails);
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Successfully added a new employee", {
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
  };

  return (
    <div className={styles.addEmployeeOverlay}>
      <div
        className={styles.closeAddEmployeeOverlayBtn}
        onClick={() => setAddEmployee(false)}
      >
        X
      </div>
      <form onSubmit={addEmployeeSubmit}>
        <input
          required
          type="text"
          placeholder="username"
          value={employeeDetails.name}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, name: e.target.value })
          }
        />

        <input
          required
          type="email"
          placeholder="example@mail.com"
          value={employeeDetails.email}
          onChange={(e) =>
            setEmployeeDetails({
              ...employeeDetails,
              email: e.target.value,
            })
          }
        />

        <input
          required
          type="number"
          placeholder="1234567890"
          value={employeeDetails.mobile}
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
          onChange={(e) =>
            setEmployeeDetails({
              ...employeeDetails,
              mobile: e.target.value,
            })
          }
        />

        <input
          required
          type="text"
          placeholder="department"
          value={employeeDetails.department}
          onChange={(e) =>
            setEmployeeDetails({
              ...employeeDetails,
              department: e.target.value,
            })
          }
        />

        <input
          required
          type="password"
          placeholder="Password"
          value={employeeDetails.password}
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, password: e.target.value })
          }
        />

        <button className={styles.adEmployeeBtn}>Add Employee</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddEmployeeOverlay;
