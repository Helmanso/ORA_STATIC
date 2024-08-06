import React from 'react';
import './IconTitleComponent.css'; // Assurez-vous que le chemin est correct
import window from './components/window .png'; 

function IconTitleComponent() {
  return (
    <div className="icon-title-container">
      <div className="icon-title-header">
        <img src={window} alt="Icon" className="icon-image" />
        <h2 className="title">Main Title</h2>
      </div>
      <div className="subtitles-container">
        <h3 className="subtitle">Subtitle 1</h3>
        <h3 className="subtitle">Subtitle 2</h3>
        <h3 className="subtitle">Subtitle 3</h3>
      </div>
    </div>
  );
}

export default IconTitleComponent;
