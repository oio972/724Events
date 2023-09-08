import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    if (byDateDesc) {
      setIndex((idx) => (idx < byDateDesc.length - 1 ? idx + 1 : 0));
    }
  };
  const switchCard = (id) => {
    setIndex(id);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextCard();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [index, nextCard]);
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img
            className="SlideCard__pictureEvent"
            src={event.cover}
            alt="forum"
          />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => (
            <input
              key={`${radioIdx + 1}`}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={() => switchCard(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

/*
1 Clé manquante dans la boucle "map"
2 Utilisation de useEffect sans dépendance
3 Problème avec le paramètre de setTimeout
*/
/*
Les modifications dans le code sont destinées à résoudre les problèmes 
mentionnés et à améliorer la structure du composant. 
Explication des modifications dans le contexte du code :

Utilisation de setInterval au lieu de setTimeout:
  Dans la fonction nextCard, j'ai supprimé le paramètre currentIndex car il n'était pas nécessaire.
  J'ai remplacé setTimeout par setInterval dans la fonction useEffect pour créer une boucle de défilement automatique des cartes.

useEffect(() => {
  const timer = setInterval(() => {
    nextCard();
  }, 5000);
  return () => {
    clearInterval(timer);
  };
}, [index]);
Correction de la clé de la boucle map:
  Dans la boucle map, changement de la clé en utilisant event.title au lieu de event.id car event.title semble être plus approprié pour une clé unique.

<div key={event.title} className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>

    Éléments parents pour chaque itération de la boucle map:
      entouré chaque itération de la boucle map par un élément parent <div> pour assurer une structure correcte du DOM.

<div className="SlideCardList">
  {byDateDesc?.map((event, idx) => (
    <div key={event.title} className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
      Contenu de la carte
    </div>
    <div className="SlideCard__paginationContainer">
      Pagination
    </div>
  ))}
</div>

Ajout de l'appel à la fonction switchCard lors du changement de radio:
  Dans la boucle map pour les radios, ajouté un "onChange" 
  pour appeler la fonction switchCard avec l'indice correspondant 
  lorsque l'utilisateur clique sur un radio.

javascript

<input
  key={`${radioIdx + 1}`}
  type="radio"
  name="radio-button"
  checked={index === radioIdx}
  onChange={() => switchCard(radioIdx)}
/>

Ces modifications visent à améliorer la structure du composant 
Slider et à résoudre les problèmes mentionnés tout en conservant 
les fonctionnalités existantes.
*/