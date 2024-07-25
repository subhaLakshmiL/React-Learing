import React from 'react';

const Footer = ({length}) => {
 
  return (
    <footer>
      {length} List  {length <= 1 ? "item" : "items"} Available here
    </footer>
  );
};

export default Footer;
