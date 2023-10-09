import React, { useState } from 'react'
import styles from './NavbarTop.module.css'

const NavbarTop = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar_top}>
        <li className={styles.navbar_top_item}>
          <a className={styles.navbar_top_item_a} href="#" onClick={toggleDropdown}>
            Men
          </a>
          {showDropdown && (
            <ul className={styles.dropdown}>
              <li><a href="#">Category 1</a></li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
            </ul>
          )}
        </li>
        <li className={styles.navbar_top_item}><a className={styles.navbar_top_item_a} href="">Women</a></li>
        <li className={styles.navbar_top_item}><a className={styles.navbar_top_item_a} href="">Kids</a></li>
        <li className={styles.navbar_top_item}><a className={styles.navbar_top_item_a} href="">EQUIPMENT</a></li>
        <li className={styles.navbar_top_item}><a className={styles.navbar_top_item_a} href="">FAN SHOPS</a></li>
        <li className={styles.navbar_top_item}><a className={styles.navbar_top_item_a} href="">Sale</a></li>
      </ul>
    </div>
  )
}

export default NavbarTop