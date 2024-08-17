import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">Candy Bistro & Bar</h1>
        <div className="menu-container">
          <button className="menu-btn" onClick={toggleDropdown}>
            Menu <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
          </button>
          {isOpen && (
            <ul className="dropdown">
              <li className="dropdown-item">Day Menu</li>
              <li className="dropdown-item">Dinner</li>
              <li className="dropdown-item">Espresso & Tea</li>
              <li className="dropdown-item">Full Bar</li>
              <li className="dropdown-item">Brunch</li>
            </ul>
          )}
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h2>Welcome to Candy Bistro & Bar</h2>
          <p>Where every sip is a sweet experience!</p>
          <button className="cta-btn">Order Now</button>
        </div>
      </header>

      <section className="featured-items">
        <h2>Our Favorites</h2>
        <div className="items">
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Espresso" />
            <h3>Espresso</h3>
            <p>Rich and bold, just the way you like it.</p>
          </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Brunch Special" />
            <h3>Brunch Special</h3>
            <p>Start your day with our delicious brunch.</p>
          </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Signature Cocktail" />
            <h3>Signature Cocktail</h3>
            <p>A perfect blend of flavors to unwind.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Candy Bistro & Bar. All rights reserved.</p>
        <p>Follow us on <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a></p>
      </footer>
    </div>
  );
}

export default App;
