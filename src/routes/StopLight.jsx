/* eslint-disable no-unused-vars */
import Header from "../components/Header";
import styles from "./StopLight.module.css";

// Créer un système de feux tricolores qui change de couleur toutes les X secondes en fonction de variable delay
// Appliquer un style conditionnel sur chaque feu en fonction de la couleur

const STOP_DELAY = 3000;
const SLOW_DELAY = 2000;
const GO_DELAY = 5000;

const StopLight = () => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <ul className={styles.stopLight}>
          <li className={styles.stop}></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  );
};

export default StopLight;
