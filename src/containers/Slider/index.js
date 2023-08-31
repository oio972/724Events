import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = data?.focus?.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );
  const nextCard = (currentIndex) => {
    setTimeout(() => setIndex(currentIndex < byDateDesc.length - 1 ? currentIndex + 1 : 0), 5000);
  };
  /*
  Problème avec le paramètre de setTimeout:

*/
  useEffect(() => {
    nextCard();
  }, [index]);  
  /*
  Utilisation de useEffect sans dépendance

*/
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
        <div 
        key={event.id} 
        /*
        event.id à la place de event.title
     
        */
        className={`SlideCard SlideCard--${
          index === idx ? "display" : "hide"}`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`${event.id}`}
                  type="radio"
                  name="radio-button"
                  checked={idx === radioIdx}
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider

/*
1 Clé manquante dans la boucle "map"
2 Utilisation de useEffect sans dépendance
3 Problème avec le paramètre de setTimeout
*/