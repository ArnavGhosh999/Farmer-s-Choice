import React from 'react';
import './App.css'; // Import the CSS file

function FarmersChoice() {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="logo">Farmer's Choice</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#recommendation">Recommendation</a>
            <a href="https://github.com/ArnavGhosh999/Farming-Recommender" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </nav>
      <div className="quote-section">
        <div className="container">
          <div className="quote-text">
            <p><i>"Farming is a profession of hope."</i></p>
            <p>- Brian Brett</p>
          </div>
        </div>
      </div>
      <div id="about" className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-text">
            <p>Farmer's Choice is dedicated to providing farmers with personalized agricultural recommendations to enhance their crop yields and promote sustainable farming practices. We utilize advanced algorithms to analyze various factors and offer tailored suggestions that optimize crop growth while respecting the environment.</p>
          </div>
        </div>
      </div>
      <div id="recommendation" className="recommendation-section">
        <div className="container">
          <h2>Recommendation</h2>
          <form className="recommendation-form">
            <input type="text" placeholder="Location (District/State)" className="city" />
            <input type="text" placeholder="Season" />
            <input type="text" placeholder="Land size" />
            <input type="text" placeholder="Soil's pH level" className="ph-level" />
            <input type="text" placeholder="Nitrogen content" className="other-levels" />
            <input type="text" placeholder="Phosphorous content" className="other-levels" />
            <input type="text" placeholder="Average humidity" className="other-levels" />
            <input type="text" placeholder="Budget" />
            <button type="submit">Get Recommendation</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FarmersChoice;
