import styles from "./homeStyle.module.css";
import Header from "../../components/header/header";
import Employee from "../../components/employee/Employee";
import Hr from "../../components/hr/Hr";
import Context from "../../context/context";
import { useContext } from "react";

const Home = () => {
  const { loggedInUser } = useContext(Context);
  return (
    <div className={styles.parentContainer}>
      <Header />
      <div className={styles.container}>
        {loggedInUser?.isEmployee ? <Employee /> : <Hr />}
      </div>
    </div>
  );
};

export default Home;
