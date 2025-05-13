import React, { useContext, useState } from "react";
import Context from "../../context/context";
import styles from "./addEmployeeOverlay.module.css";

const AddEmployeeOverlay = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    isEmployee: true,
  });
  const { setAddEmployee } = useContext(Context);
  return (
    <div className={styles.addEmployeeOverlay}>
      <div
        className={styles.closeAddEmployeeOverlayBtn}
        onClick={() => setAddEmployee(false)}
      >
        X
      </div>
      <form>
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

        <button className={styles.adEmployeeBtn}>Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeOverlay;
