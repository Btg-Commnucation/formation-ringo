// Première étape: Faire en sorte que le Counter marche dans ce fichier
// Deuxième étape: Faire en sorte que le Counter soit dans un fichier séparé
// Bonus: Faire en sorte que le Counter dans le fichier séparé est un step contrôlé par un champ input
// Bonus 2 : Fair en sorte que le Counter ne puisse aller en dessous de 0 depuis App puis depuis Counter
// Bonus 3 : Réadapter l'interdiction en dessous de 0 pour le step

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <section className="counter">
        <h1>Bonjour, votre compte est de 0</h1>
        <div className="btn-container">
          <button>Augmenter le compte</button>
          <button>Diminuer le compte</button>
        </div>
      </section>
    </>
  );
}

export default App;
