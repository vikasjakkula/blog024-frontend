// Import necessary dependencies
import React, { useState } from 'react';
import './Home.css';
import { FaSearch } from 'react-icons/fa';

// Home component - the landing page of the application
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    // Main container for the home page
    <div className="home">
      {/* Search Bar */}
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </form>
      </div>

      {/* Main heading */}
      {/* Use Raleway font for all content below */}
      {/*
        You can also consider moving this style to a CSS class if you want to apply it globally.
        For now, we'll use inline style as per the prompt.
      */}
      {(() => {
        const ralewayFont = { fontFamily: "'Raleway', sans-serif" };
        return (
          <div style={ralewayFont}>
            <h1 style={ralewayFont}>Welcome To My Blog</h1>
            <img 
              src="/Dp.png" 
              alt="Dp" 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                margin: '20px auto'
              }}
            />
            {/* Introduction text */}
            <p style={ralewayFont}>This modern is just for testing purposes , Checkout My page please</p>
            <p style={ralewayFont}>Myself Vikas Yadav</p>
            <p style={ralewayFont}>I am 17yr's old </p>
            
            {/* Features section with cards */}
            <div className="features-container ">
              <div className="features">
                {/* Feature card 1 */}
                <div className="feature-card" style={ralewayFont}>
                  <h2 style={ralewayFont}>School</h2>
                  <p style={ralewayFont}>Bhashyam high school</p>
                  <p style={ralewayFont}>2021-2023</p>
                </div>
                {/* Feature card 2 */}
                <div className="feature-card" style={ralewayFont}>
                  <h2 style={ralewayFont}>Intermediate</h2>
                  <p style={ralewayFont}>Nano jr.cllg</p>
                  <p style={ralewayFont}>2023-2025</p>
                </div>
                {/* Feature card 3 */}
                <div className="feature-card" style={ralewayFont}>
                  <h2 style={ralewayFont}>Engineering</h2>
                  <p style={ralewayFont}>NGIT i.e,Neil Gogte Institute of Technology</p>
                  <p style={ralewayFont}>2025-2029</p>
                </div>
                {/* Feature card 4 */}
                <div className="feature-card" style={ralewayFont}>
                  <h2 style={ralewayFont}>Hustle Mode</h2>
                  <p style={ralewayFont}>Start grow Inverst !</p>
                  <p style={ralewayFont}>2029-2033</p>
                </div>
              </div>
              <div className="feature-card" style={{ ...ralewayFont, marginTop: '3rem' }}>
                <h2 style={ralewayFont}>What's Next?</h2>
                <p style={ralewayFont}>2035 & Beyond</p>
                <p style={ralewayFont}>Innovate, lead, and build impactful tech solutions.</p>
                <p style={ralewayFont}>Study the startup's : build grow inverst.</p>
              </div>
            </div>
            <div className="feature-card" style={{ ...ralewayFont, marginTop: '3rem' }}>
              <h2 style={ralewayFont}>Dream</h2>
              <p style={ralewayFont}>20??</p>
              <p style={ralewayFont}>Finally Grand Delivary Of Brand New AMG G63 ❤️‍🔥</p>
              <p style={ralewayFont}>End !</p>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default Home;
