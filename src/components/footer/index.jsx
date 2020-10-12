import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>CopyRight <span data-test="year">{year}</span> Test Jest and Enzyme</p>
    </footer>
  )
};

export default Footer;
