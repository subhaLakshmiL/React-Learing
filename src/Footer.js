import React from 'react';

const Footer = () => {
  const year = new Date();  // Get the current year
  
  return (
    <footer>
      <p>Copyright &copy; {year.getFullYear()} My Project 1</p>
    </footer>
  );
};

export default Footer;
