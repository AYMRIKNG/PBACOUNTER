import React, { useState } from 'react';
import './setting.css';
import './accueil.css';
import ppbbLogo from './assets/pbb_logo.svg'; 
import { useNavigate } from 'react-router-dom';
import Space from './space.jsx';

function Setting() {
  const navigate = useNavigate();

  const [meilleurEn, setMeilleurEn] = useState(3);
  const [partieEn, setPartieEn] = useState(2);

  const [firstTeam, setFirstTeam] = useState('');  
  const [secondTeam, setSecondTeam] = useState('');  

  const goToHome = () => {
    navigate('/');
  };

  const goToPlay = () => {
   
    navigate('/play', {
      state: {
        firstTeam,
        secondTeam,
        meilleurEn,
        partieEn,
      }
    });
  };

  const incrementerMeilleurEn = () => {
    setMeilleurEn((prev) => prev + 1);
  };

  const decrementerMeilleurEn = () => {
    setMeilleurEn((prev) => (prev > 1 ? prev - 1 : 1)); 
  };

  const incrementerPartieEn = () => {
    setPartieEn((prev) => prev + 1);
  };

  const decrementerPartieEn = () => {
    setPartieEn((prev) => (prev > 1 ? prev - 1 : 1)); 
  };

  return (
    <>
      <input type="button" className="uparrow" value="←"  onClick={goToHome} />
      <h3>2 TEAMS</h3> 

      <div className='cont'>
        <label htmlFor="firstTeam">First Team</label>
        <label htmlFor="secondTeam">Second Team</label>
      </div>

      <div className='cont'>
        <input
          type="text"
          id="firstTeam"
          placeholder="Entrez un nom"
          value={firstTeam}
          onChange={(e) => setFirstTeam(e.target.value)} 
        />
        <input
          type="text"
          id="secondTeam"
          placeholder="Entrez un nom"
          value={secondTeam}
          onChange={(e) => setSecondTeam(e.target.value)} 
        />
      </div>

      <h3>
        <span onClick={decrementerMeilleurEn}>◄</span>
        <Space />MEILLEUR EN {meilleurEn}
        <Space />
        <span onClick={incrementerMeilleurEn}>►</span>
      </h3>

      <h3>
        <span onClick={decrementerPartieEn}>◄</span>
        <Space />PARTIE EN {partieEn}
        <Space />
        <span onClick={incrementerPartieEn}>►</span>
      </h3>

      <input type="button" className="startinput" value="Commencer" onClick={goToPlay} />
      <img src={ppbbLogo} className='logo' alt="Logo" />
    </>
  );
}

export default Setting;
