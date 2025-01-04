import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css'; // Import CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>Rides</div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Menu */}
      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/Catalogue">Cart</a></li>
        <li><a href="/Content">Order</a></li>
        <li><a href="/PaymentForm">Payment</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
