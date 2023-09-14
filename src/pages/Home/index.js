import React, { useEffect, useState } from "react";
import Menu from "../../containers/Menu";
import ServiceCard from "../../components/ServiceCard";
// eslint-disable-next-line no-unused-vars
import EventCard from "../../components/EventCard";
import PeopleCard from "../../components/PeopleCard";

import "./style.scss";
import EventList from "../../containers/Events";
import Slider from "../../containers/Slider";
import Logo from "../../components/Logo";
import Icon from "../../components/Icon";
import Form from "../../containers/Form";
import Modal from "../../containers/Modal";
import { useData } from "../../contexts/DataContext";
import LastEvent from "../../helpers/LastEvent";

const Page = () => {
  const { data } = useData();
  const [last, setLast] = useState();
  useEffect(() => {
    if (data) setLast(LastEvent(data?.events.slice()));
  }, [data]);
  return <>
    <header>
      <Menu />
    </header>
    <main>
      <section className="SliderContainer">
        <Slider />
      </section>
      <section className="ServicesContainer" id="nos-services">
        <h2 className="Title">Nos services</h2>
        <p>Nous organisons des événements sur mesure partout dans le monde</p>
        <div className="ListContainer">
          <ServiceCard imageSrc="/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png">
            <h3>Soirée d’entreprise</h3>
            Une soirée d’entreprise vous permet de réunir vos équipes pour un
            moment convivial afin de valoriser votre société en projetant une
            image dynamique. Nous vous proposons d’organiser pour vous vos
            diners et soirée d’entreprise
          </ServiceCard>
          <ServiceCard imageSrc="/images/hall-expo.png">
            <h3>Conférences</h3>
            77 events vous propose d’organiser votre évènement, quelle que soit
            sa taille, en s’adaptant à votre demande et à vos demandes. En tant
            que spécialistes de l’évènementiel, nous saurons trouver le lieu
            parfait ainsi que des solutions inédites pour capter votre audience
            et faire de cet évènement un succès
          </ServiceCard>
          <ServiceCard imageSrc="/images/sophia-sideri-LFXMtUuAKK8-unsplash1.png">
            <h3>Experience digitale</h3>
            Notre agence experte en contenus immersifs offre des services de
            conseil aux entreprises, pour l’utilisation de la réalité virtuelle,
            de la réalité augmentée et de la réalité mixte de l’animation
            événementielle, à la veille technologique jusqu’au développement de
            module de formation innovant
          </ServiceCard>
        </div>
      </section>
      <section className="EventsContainer" id="nos-realisations">
        <h2 className="Title">Nos réalisations</h2>
        <EventList />
      </section>
      <section className="PeoplesContainer" id="notre-equipe">
        <h2 className="Title" id="notre-equipe">Notre équipe</h2>
        <p>Une équipe d’experts dédiés à l’ogranisation de vos événements</p>
        <div className="ListContainer">
          <PeopleCard
            imageSrc="/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png"
            name="Samira"
            position="CEO"
          />
          <PeopleCard
            imageSrc="/images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.png"
            name="Jean-baptiste"
            position="Directeur marketing"
          />
          <PeopleCard
            imageSrc="/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.png"
            name="Alice"
            position="CXO"
          />
          <PeopleCard
            imageSrc="/images/jonas-kakaroto-KIPqvvTOC1s-unsplash.png"
            name="Luís"
            position="Animateur"
          />
          <PeopleCard
            imageSrc="/images/amy-hirschi-b3AYk8HKCl0-unsplash1.png"
            name="Christine"
            position="VP animation"
          />
          <PeopleCard
            imageSrc="/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png"
            name="Isabelle"
            position="VP communication"
          />
        </div>
      </section>
      <div className="FormContainer" id="contact">
        <h2 className="Title">Contact</h2>
        <Modal
          Content={
            <div className="ModalMessage--success">
              <div data-testid="successMessage">Message envoyé !</div>
              <p>
                Merci pour votre message nous tâcherons de vous répondre dans
                les plus brefs délais
              </p>
            </div>
          }
        >
          {({ setIsOpened }) => (
            <Form
              onSuccess={() => setIsOpened(true)}
              onError={() => null}
            />
          )}
        </Modal>
      </div>
    </main>
    <footer className="row" data-testid="footer">
      <div className="col presta">
        <h3>Notre derniére prestation</h3>
        {(last) ? <EventCard
          imageSrc={last.cover}
          title={last.title}
          date={new Date(last.date)}
          small
          label="boom"
        /> : ''}
      </div>
      <div className="col contact">
        <h3>Contactez-nous</h3>
        <address>45 avenue de la République, 75000 Paris</address>
        <div>01 23 45 67 89</div>
        <div>contact@77events.com</div>
        <div>
          <a href="#twitch">
            <Icon name="twitch" />
          </a>
          <a href="#facebook">
            <Icon name="facebook" />
          </a>
          <a href="#twitter">
            <Icon name="twitter" />
          </a>
          <a href="#youtube">
            <Icon name="youtube" />
          </a>
        </div>
      </div>
      <div className="col description">
        <Logo size="large" />
        <p>
          Une agence événementielle propose des prestations de service
          spécialisées dans la conception et l&apos;organisation de divers événements
          tels que des événements festifs, des manifestations sportives et
          culturelles, des événements professionnels
        </p>
      </div>
    </footer>
  </>
}

export default Page;





/*
helpers date 
Ajout +1 à getMonth() pour correspondre à MONTHS (par défaut, janvier = 0 et non 1) 
: Résolution des décallages + "undefined" les évènements en janvier
*/

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

/*
DataContext DataContext
Ajout méthode last (Affiche le dernier évènement)
*/
/*
Home Home
  Rendu conditionné ("Notre dernière prestation") => évite un message d'erreur dans la console au premier chargement
  Correction des ancrages sur la page
  Débug message de validation du formulaire (-> component Form)
*/