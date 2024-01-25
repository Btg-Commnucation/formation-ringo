import Header from "../components/Header";
import styles from "./HearthStone.module.css";

// Créer un store, qui récupère les données d'une API Rest distante.
// Consommer le store de manière asynchrone dans le composant
// Si la carte est un spell afficher la spellSchool sinon si c'est un minion afficher attaque et vie
// Faire en sorte que chaque Card soit cliquable, renvoyer vers un URL basé sur l'id de chaque card et y afficher l'image de la card

// https://api.hearthstonejson.com/v1/192412/frFR/cards.collectible.json

const HearthStone = () => {
  return (
    <>
      <Header />
      <section className="counter">
        <h1>Bienvenue la collection de carte Hearthstone</h1>
        <div className={styles.cardContainer}>
          <div to={`/hearthstone`} className={styles.card}>
            <h2>Héros défunt</h2>
            <p>Coût : 2</p>
            <p>
              Votre pouvoir héroïque inflige 1 point de dégâts supplémentaire
            </p>
            <p>Attaque : 3 / Vie : 2</p>
            <p>UNDEAD</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HearthStone;
