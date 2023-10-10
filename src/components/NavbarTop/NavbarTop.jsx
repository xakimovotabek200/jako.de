import React, { useState } from 'react'
import styles from './NavbarTop.module.css'

const NavbarTop = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  // salom
  return (
    <div className={styles.navbar_top}>
      <div className={styles.navbar_top_logo}>
        <img className={styles.logo_img} src="https://cdn.jako.de/userdata/images/Basics/logo-blue.svg" alt="" />
        <ul className={styles.navbar_top_ul_collection}>
          <li className={styles.navbar_top_item}>
            <a className={styles.navbar_top_item_a} href="#" onClick={toggleDropdown}>
              Men
            </a>
            {showDropdown && (
              <ul className={styles.dropdown}>
                <li className={styles.dropdown_li}>Category 1</li>
                <li className={styles.dropdown_li}>Category 2</li>
                <li className={styles.dropdown_li}>Category 3</li>
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
      <div className="icons"></div>
    </div>
  )
}

export default NavbarTop