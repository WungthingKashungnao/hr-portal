import React, { useContext, useState } from "react";
import styles from "./employee.module.css";
import Context from "../../context/context";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Employee = () => {
  const { loggedInUser } = useContext(Context);
  const [leave, setLeave] = useState({
    reason: "",
    status: "pending",
    appliedByEmail: loggedInUser.email,
    appliedByName: loggedInUser.name,
    leaveId: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const leaveRequests =
      JSON.parse(localStorage.getItem("leaveRequests")) || [];
    // Calculate next leaveId
    const nextLeaveId =
      leaveRequests.length === 0
        ? 1
        : Math.max(...leaveRequests.map((request) => request.leaveId)) + 1;

    // Create new leave request with updated ID
    const newLeaveRequest = {
      ...leave,
      leaveId: nextLeaveId,
    };

    // Add to existing requests and save
    leaveRequests.push(newLeaveRequest);
    localStorage.setItem("leaveRequests", JSON.stringify(leaveRequests));
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

    setLeave({
      reason: "",
      status: "pending",
      appliedByEmail: loggedInUser.email, // Must re-fetch
      appliedByName: loggedInUser.name, // Must re-fetch
      leaveId: 1, // Will recalculate on next submit
    });
  };

  // Get leave requests from localStorage
  const leaveRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];

  return (
    <div className={styles.employeeContainer}>
      <div className={styles.empTop}>
        <form onSubmit={handleSubmit}>
          <textarea
            required
            placeholder="reason"
            value={leave.reason}
            onChange={(e) => setLeave({ ...leave, reason: e.target.value })}
          />
          <button>Apply Leave</button>
        </form>
      </div>
      <div className={styles.empBot}>
        {leaveRequests
          .filter((request) => request.appliedByEmail === loggedInUser.email) // Only show current user's requests
          .map((request) => (
            <div key={request.leaveId} className={styles.leaveBox}>
              <div className={styles.leaveBoxTop}>{request.reason}</div>
              <div className={styles.leaveBoxBot}>
                Status:{" "}
                <button
                  className={`${styles.myStatus} ${
                    request.status === "accepted"
                      ? styles.accepted
                      : request.status === "rejected"
                      ? styles.rejected
                      : ""
                  }`}
                >
                  {request.status}
                </button>
              </div>
            </div>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Employee;
