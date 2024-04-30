import React from 'react';
import Logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id='header'>
      <img src={Logo} alt='Logo showing a money bag' />
      <h1 id='header'>Investment Calculator</h1>
    </header>
  );
};

export default Header;
