import React, { useState } from 'react';
import './components/Rating.css';
import './components/Navbar.css';
import './styles.css';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Icon1 from './components/Icon1';
import Icon2 from './components/Icon2';
import Rating from './components/Rating';
import photo from './components/photo.jpg';  
import StatisticsCard from './components/StatisticsCard';
import pic from './components/pic.jpg';  
import NewIcon1 from './components/NewIcon1.png';  
import NewIcon2 from './components/NewIcon2.png';  
import NewIcon3 from './components/NewIcon3.png';  
import NewIcon4 from './components/NewIcon4.png';  
import './components/RatingPage1.css';
import './components/RatingPage3.css';
import './components/Button.css';
import img from './components/img.png';
import rec from './components/rec.png';
import logo5 from './components/logo5.png';
import Rectangle from './components/Rectangle.png';
import IconTitleComponent from './IconTitleComponent'; 
import window from './components/window .png'; 
import sep from './components/sep.png';

const App = () => {

  const [ratingPage1, setRatingPage1] = useState(4);
  const [ratingPage3, setRatingPage3] = useState(4);
  const [reviewsCountPage3, setReviewsCountPage3] = useState(0);

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleRatingChangePage1 = (newRating) => {
    setRatingPage1(newRating);
  };

  const handleRatingChangePage3 = (newRating) => {
    setRatingPage3(newRating);
    setReviewsCountPage3(prev => prev + 1); // Augmente le nombre d'avis sur la page 3
  };

  return (
    <div className="App">
      <Navbar />

      {/* Page 1 */}
      <div className="page1">
        <div className="content-container">
          <div className="text-container">
            <h1 className="navbar-titleone">DÉCOUVREZ LA SUPER-APP ORA</h1>
            <h2 className="navbar-titletwo">Votre nouvelle façon de vendre, acheter et partager en ligne.</h2>
            <p>Chez ORA, notre mission est de rendre l'achat et la vente en ligne plus facile et plus accessible à tous les Marocains.</p>
            <h3>Téléchargez dès maintenant</h3>
            <div className="button-countainer">
            <div className="button-container">
              <Button
                className="page1-button"
                backgroundColor="#1DB18E"
                text="Appstore"
                icon={Icon1}
                textColor="#FFFFFF"
                iconColor="white"
                onClick={handleClick}
              />
              <Button
                className="page1-button"
                text="Playstore"
                backgroundColor="#1DB18E"
                icon={Icon2}
                textColor="#FFFFFF"
                iconColor="white"
                onClick={handleClick}
              />
            </div>
            </div>
            <Rating
              rating={ratingPage1}
              maxRating={5}
              text="4"
              className="page1-rating"
            />
            </div>
          <div className="image-container">
            <img src={photo} alt="App Promotion" className="photo" />
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="page2">
        <div className="titles">
          <h4 className="titre1">
            <strong>Lorem ipsum dolor sit amet,</strong><br />
            <strong>consectetur adipiscing elit</strong>
          </h4>
        </div>
        <div className="sub">
          <h5 className="titre2">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br /> commodo consequat.
          </h5>
        </div>
        <div className="cards-wrapper">
          <div className="card-group">
            <StatisticsCard
              title="+ 10,000"
              subtitle="Duis aute irure dolor in sit amet consectet"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
              titleColor="#1DB18E"
              subtitleColor="#5E6175"
              descriptionColor="#A9AFC4"
            />
            <StatisticsCard
              title="+520"
              subtitle="In voluptate velit essem"
              description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
              titleColor="#1DB18E"
              subtitleColor="#5E6175"
              descriptionColor="#A9AFC4"
            />
            <StatisticsCard
              title="+95"
              subtitle="Eu fugiat nulla pariatu adipiscing elit"
              description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
              titleColor="#1DB18E"
              subtitleColor="#5E6175"
              descriptionColor="#A9AFC4"
            />
          </div>
          <div className="photo-container">
            <img src={pic} alt="Additional Promotion" className="photo" />
          </div>
          <div className="card-group">
            <StatisticsCard
              title="+10,000"
              subtitle="Duis aute irure dolor in sit amet consectet"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
              titleColor="#1DB18E"
              subtitleColor="#5E6175"
              descriptionColor="#A9AFC4"
            />
            <StatisticsCard
              title="+520"
              subtitle="In voluptate velit essem"
              description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
              titleColor="#1DB18E"
              subtitleColor="#5E6175"
              descriptionColor="#A9AFC4"
            />
            <StatisticsCard
              title="+95"
              subtitle="Eu fugiat nulla pariatu adipiscing elit"
              description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
              titleColor="#1DB18E"
              subtitleColor="#5E6175"
              descriptionColor="#A9AFC4"
            />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="additional-cards-wrapper">
            <div className="additional-card">
              <img src={NewIcon1} alt="Icon 1" className="card-icon" />
              <h3 className="card-title">Wallet</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="additional-card">
              <img src={NewIcon2} alt="Icon 2" className="card-icon" />
              <h3 className="card-title">Messagerie</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="additional-card">
              <img src={NewIcon3} alt="Icon 3" className="card-icon" />
              <h3 className="card-title">Recharges<br/> & Factures</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="additional-card">
              <img src={NewIcon4} alt="Icon 4" className="card-icon" />
              <h3 className="card-title">Communautés</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="info-section">
            <h1>Ne manquez pas<br/> l'opportunité de<br/> découvrir ORA</h1>
            <p>ORA est en train de devenir une référence incontournable<br/> pour les Marocains en matière de e-commerce<br/> et de réseaux sociaux.</p>
            <div className="buttons">
              <Button
                text="Appstore"
                backgroundColor="#1DB18E"
                icon={Icon1}
                textColor="#FFFFFF"
                iconColor="white"
                onClick={handleClick}
                
              />
              <Button
                text="Playstore"
                backgroundColor="#1DB18E"
                icon={Icon2}
                textColor="#FFFFFF"
                iconColor="white"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="page3">
  <div className="rating-section">
    <h3 className="rating-title">Lorem ipsum dolor sit amet</h3>
    <div className="rating-text">4.9</div> {/* Texte de notation au-dessus des étoiles */}
    <div className="rating-container">
      <Rating
        rating={ratingPage3}
        maxRating={5}
        className="page3-rating"
      />
      <div className="rating-avis">7.650 avis</div> {/* Nombre d'avis sous les étoiles */}
    </div>
  </div>
  <div className="middle-section">
    <h4>John doe</h4>
    <h5>10 mai 2023</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  <div className="right-section">
    <h6>Lorem ipsum</h6>
    <div className="page3">
        <div className="button-container">
          <Button
            className="button"
            text="Appstore"
            backgroundColor="white"
            icon={Icon1}
            textColor="gray"
            iconColor="gray"
            onClick={handleClick}
          />
          <Button
            className="button"
            text="Playstore"
            backgroundColor="white"
            icon={Icon2}
            textColor="gray"
            iconColor="gray"
            onClick={handleClick}
          />
</div>
</div>    
  </div>
  <div className="image-bottom">
    <img src={img} alt="Bottom Image" className="bottom-image" />
  </div>
</div>
<div className="new-page">
        <h1 className="new-page-title">Ne manquez pas l'opportunité de découvrir ORA</h1>
        <h2 className="new-page-subtitle">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
     
        <div className="rectangle-container">
        <div className="rectangle rectangle-name">Nom et Prénom</div>
        <div className="rectangle rectangle-email">Adresse e-mail</div>
        <div className="rectangle rectangle-signup">S’inscrire à la newsletter</div>
      </div>
      </div>
      <div className="recbottom">
        <img src={rec} alt="Bottom Image" className="bottom-image" />
      </div>
      
      <div className="logo-paragraph-container">
          <img src={logo5} alt="Logo" className="logo-image" />
          <p className="page-paragraph">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore <br/>et dolore magna aliqua.</p>
          <div className="icon-title-component-container">
            <IconTitleComponent 
              icon={window}
              title="Fenêtres"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <IconTitleComponent 
              icon={rec}
              title="Récipients"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <IconTitleComponent 
              icon={Rectangle}
              title="Rectangles"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
        <div className="separator-line"></div>
      </div>
    
  );
}

export default App;