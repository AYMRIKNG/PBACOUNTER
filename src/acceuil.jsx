import React from 'react';
import { useNavigate } from 'react-router-dom';
import ppbbLogo from './assets/pbb_logo.svg'; 
import './accueil.css'

function Acceuil() {
  const navigate = useNavigate();

  const goToSettings = () => {
    navigate('/settings');
  };

  return (
    <>
      <h1>Paris Basket Avenir <br />Counter</h1>
      <input 
        className='maininput' 
        type="button" 
        value="Nouvelle game" 
        onClick={goToSettings} 
      />
      <img src={ppbbLogo} className='logo' alt="Logo" />
    </>
  );
}

export default Acceuil;
