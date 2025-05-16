import React, { useContext, useEffect, useState } from "react";
import styles from "./hr.module.css";
import Context from "../../context/context";
import AddEmployeeOverlay from "../add employee overlay/AddEmployeeOverlay";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Hr = () => {
  const { addEmployee, setAddEmployee } = useContext(Context);
  const [leaveRequests, setLeaveRequests] = useState([]);
  useEffect(() => {
    const storedRequests =
      JSON.parse(localStorage.getItem("leaveRequests")) || [];
    setLeaveRequests(storedRequests);
  }, []);
  // let leaveRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];

  const updateLeaveStatus = (status, data) => {
    const updatedRequests = leaveRequests.map((element) => {
      if (element.leaveId === data.leaveId) {
        return { ...element, status };
      }
      return element;
    });
    setLeaveRequests(updatedRequests);
    localStorage.setItem("leaveRequests", JSON.stringify(updatedRequests));

    leaveRequests.forEach((element) => {
      if (element.leaveId === data.leaveId) {
        element.status = status;
        localStorage.setItem("leaveRequests", JSON.stringify(leaveRequests));
        if (status === "accepted") {
          toast.success("Leave Accepted!", {
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
        } else if (status === "rejected") {
          toast.success("Leave Rejected!", {
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
        }
      }
    });
  };

  // const updateLeaveStatus = (status, data) => {
  //   leaveRequests.forEach((element) => {
  //     if (element.leaveId === data.leaveId) {
  //       element.status = status;
  //       localStorage.setItem("leaveRequests", JSON.stringify(leaveRequests));
  //       toast.success("Successfully Updated Leave!", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: false,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //         transition: Bounce,
  //       });
  //     }
  //   });
  // };

  return (
    <div className={styles.hrContainer}>
      {addEmployee && <AddEmployeeOverlay />}

      <div className={styles.hrTop}>
        <h2>HR DASHBOARD</h2>
        <div className={styles.addEmployeeContainer}>
          <button onClick={() => setAddEmployee(true)}>Add Employee</button>
        </div>
      </div>
      <div className={styles.hrBot}>
        {leaveRequests.map((requests) => (
          <div className={styles.leaveRequests} key={requests.leaveId}>
            <p>{requests.appliedByName}</p>
            <p>{requests.appliedByEmail}</p>
            <p className={styles.leaveReason}>{requests.reason}</p>
            {requests.status === "pending" ? (
              <div className={styles.leaveStatus}>
                <button onClick={() => updateLeaveStatus("accepted", requests)}>
                  Accept
                </button>
                <button onClick={() => updateLeaveStatus("rejected", requests)}>
                  Reject
                </button>
              </div>
            ) : (
              // <button className={styles.finalLeaveStatus}>
              //   {requests.status}
              // </button>
              <button
                className={`${styles.finalLeaveStatus} ${
                  requests.status === "accepted"
                    ? styles.accepted
                    : requests.status === "rejected"
                    ? styles.rejected
                    : ""
                }`}
              >
                {requests.status}
              </button>
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Hr;
