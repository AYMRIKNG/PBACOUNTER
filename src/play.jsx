import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './play.css'; 
import ppbbLogo from './assets/pbb_logo.svg'; 

function Play() {
  const location = useLocation();
  const navigate = useNavigate();

  const { firstTeam, secondTeam, meilleurEn, partieEn } = location.state || {};

  const [scoreMatch1, setScoreMatch1] = useState(0);
  const [scoreMatch2, setScoreMatch2] = useState(0);
  const [scorePartie1, setScorePartie1] = useState(0);
  const [scorePartie2, setScorePartie2] = useState(0);

  const handleScorePartie1 = (value) => {
    setScorePartie1(prev => Math.max(prev + value, 0));
  };

  const handleScorePartie2 = (value) => {
    setScorePartie2(prev => Math.max(prev + value, 0));
  };

  const handleMatchScore = () => {
    if (scorePartie1 >= partieEn) {
      setScoreMatch1(prev => prev + 1);
      setScorePartie1(0); 
      setScorePartie2(0); 
    } else if (scorePartie2 >= partieEn) {
      setScoreMatch2(prev => prev + 1);
      setScorePartie1(0);
      setScorePartie2(0);
    }
  };

  const resetScores = () => {
    setScoreMatch1(0);
    setScoreMatch2(0);
    setScorePartie1(0);
    setScorePartie2(0);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="play-container">
      
      {/* Bouton pour réinitialiser les scores */}
      <div className="controls">
        <button onClick={resetScores}>Réinitialiser</button>
        <button className='red' onClick={goToHome}>Fin</button>
      </div>

    

      <div className='r'>
        <div className='head'>
        <h3>{firstTeam}</h3>
        <h2>{scoreMatch1}</h2>
        </div>
        <div className='core'>
          <h1>{scorePartie1}</h1>
        </div>
        <div className="buttons">
            <button onClick={() => handleScorePartie1(1)}>+1</button>
            <button onClick={() => handleScorePartie1(2)}>+2</button>
            <button onClick={() => handleScorePartie1(3)}>+3</button>
            <button onClick={() => handleScorePartie1(-1)}>-1</button>
            <button onClick={() => handleScorePartie1(-2)}>-2</button>
            <button onClick={() => handleScorePartie1(-3)}>-3</button>
          </div>
      </div>
      <div className='l'>
        <div className='head'>
        <h2>{scoreMatch2}</h2>
        <h3>{secondTeam}</h3>
        
        </div>
        <div className='core'>
          <h1>{scorePartie2}</h1>
        </div>
        <div className="buttons">
            <button onClick={() => handleScorePartie2(1)}>+1</button>
            <button onClick={() => handleScorePartie2(2)}>+2</button>
            <button onClick={() => handleScorePartie2(3)}>+3</button>
            <button onClick={() => handleScorePartie2(-1)}>-1</button>
            <button onClick={() => handleScorePartie2(-2)}>-2</button>
            <button onClick={() => handleScorePartie2(-3)}>-3</button>
          </div>
      </div>

      <img src={ppbbLogo} className='logo' alt="Logo" />

  {scorePartie1 >= partieEn || scorePartie2 >= partieEn ? handleMatchScore() : null}


  


    
    </div>
  );
}

export default Play;
