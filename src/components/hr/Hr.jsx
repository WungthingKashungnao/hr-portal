import React, { useContext } from "react";
import styles from "./hr.module.css";
import Context from "../../context/context";
import AddEmployeeOverlay from "../add employee overlay/AddEmployeeOverlay";
const Hr = () => {
  const { addEmployee, setAddEmployee } = useContext(Context);

  return (
    <div className={styles.hrContainer}>
      {addEmployee && <AddEmployeeOverlay />}

      <div className={styles.hrTop}>
        <h2>HR DASHBOARD</h2>
        <div className={styles.addEmployeeContainer}>
          <button onClick={() => setAddEmployee(true)}>Add Employee</button>
        </div>
      </div>
      <div className={styles.hrBot}></div>
    </div>
  );
};

export default Hr;
