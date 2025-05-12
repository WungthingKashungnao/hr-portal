import styles from "./homeStyle.module.css";
import Header from "../../components/header/header";

const Home = () => {
  return (
    <div className={styles.parentContainer}>
      <Header />
      <div className={styles.container}></div>
    </div>
  );
};

export default Home;
