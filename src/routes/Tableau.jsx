/* eslint-disable no-unused-vars */
import Header from "../components/Header";
import styles from "./Tableau.module.css";

// Créer un composant unique Card, qui récupère les données du tableau data
// Afficher dans le composant Card chaque personne avec les différentes informations avec le conditionnel pour celles qui ne sont pas obligatoires

const Tableau = () => {
  const data = [
    {
      name: "Samuel",
      job: "Développeur",
      special: "Grand maître",
      cover: {
        name: "ringo-studio.png",
        alt: "Site de Ringo studio",
      },
    },
    {
      name: "Guillaume",
      job: "Web Designer",
      cover: {
        name: "btg-communication.png",
        alt: "Site de BTG Communication",
      },
    },
    {
      name: "Julie",
      job: "Développeuse",
      special: "Collaboratrice du grand maître",
      cover: {
        name: "ringo-studio.png",
        alt: "Site de Ringo studio",
      },
    },
    {
      name: "Gaël",
      job: "Graphiste",
      cover: {
        name: "btg-communication.png",
        alt: "Site de BTG Communication",
      },
    },
  ];

  return (
    <>
      <section className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img
              src="/ringo-studio.png"
              alt="Ringo studio"
              className={styles.coverImage}
            />
            <div className={styles.titleElement}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={styles.svg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <h2>Samuel</h2>
            </div>
          </div>
          <div className={styles.cardBody}>
            <span>Développeur web</span>
            <span>Grand maître</span>
          </div>
        </div>
      </section>
      <Header />
    </>
  );
};

export default Tableau;
