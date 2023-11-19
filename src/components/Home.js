import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import Header from './Header';
import Footer from './Footer';
import './Home.css';
import './card.css';
import './button1.css';

const Home = ({ links, selectedCategory, handleCategoryChange }) => {
  const categories = ['All', ...new Set(links.map((link) => link.category))];
  console.log('Received links:', links);

  return (
    <div>
      <Header />
      <div className='container' style={{
        margin: '0px',
        padding: '10px',
      }}>
        <span class="regular-text-bold" style={{ fontSize: '24px', fontWeight: 'bold' }}>Categories: </span>
      </div>
      <div className='container' style={{ margin: '0px' }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`card2 ${selectedCategory === category ? 'active' : ''}`}
            style={{ height: '40px', width: '100px', margin: '10px', }}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Separate this in 2. Hero */}
      <div class="container" id="container">
        {links
          .filter((link) => selectedCategory === 'All' || selectedCategory === link.category)
          .map((link, index) => (
            <div key={index} class="card2">
              <div class="top-section">
                <img src={link.icon} alt={link.name} />
              </div>
              <div class="border">
              </div>
              <div class="icons">
              </div>
              <div class="bottom-section">
                <span class="title">{link.name}</span>
                <div class="row row1">
                  <div class="item">
                    <span class="regular-text-bold">Version</span>
                    <span class="big-text" style={{ fontSize: '0.7em', display: 'block', textAlign: 'center', maxWidth: '100%'}}>{link.version}</span>
                  </div>
                  <div className="item">
                    <img
                      src={require('../assets/dwld.png')}
                      style={{ width: '50px', height: '50px', margin: '0px', cursor: 'pointer', padding: '0px' }}
                      onClick={() => window.location.href = link.download}
                      alt="Download"
                    />
                  </div>
                  <div className='item'>
                    <span class="regular-text-bold">Size </span>
                    <span class="big-text" style={{ fontSize: '0.7em', display: 'block', textAlign: 'center', maxWidth: '100%'}}>{link.size}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <Footer />
      </div>
    </div>
  );
};

export default Home;