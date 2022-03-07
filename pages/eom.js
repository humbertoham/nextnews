import { Toolbar } from "../components/toolbar";
import styles from "../styles/EOM.module.css";

export const EOM = () => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee Of The Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>Humberto Ham</h3>
          <h6>Web developer</h6>
          <img src="./profile.jpg" />
          <p>The most awesome dude in the planet earth</p>
        </div>
      </div>
    </div>
  );
};

export default EOM;
