import Header from "../components/Header";
import styles from "./CardImage.module.css";

// Ce composant doit s'afficher lorsque l'on clique sur une des carte
// On a besoin de l'id de la carte pour afficher l'image
// Cette route doit disparaître du header et doit devenir dynamique

// Bonus : Faire un lien pour revenir sur la page précédente

const CardImage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <img
          src="https://art.hearthstonejson.com/v1/render/latest/frFR/512x/AT_003.png"
          alt="Jeu de carte Hearthstone"
        />
      </div>
    </>
  );
};

export default CardImage;
