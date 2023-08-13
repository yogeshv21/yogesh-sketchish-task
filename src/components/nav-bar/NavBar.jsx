import React from "react";
import styles from "./NavBar.module.css";

// Local Imports
import { Images, Icons } from "../../assets/index";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarWraper}>
        <div className={styles.navLeft}>
          <div className={styles.brandLogoCont}>
            <img src={Images.brandLogo} alt="" />
            <span className={styles.badge}>beta</span>
          </div>
          <img className={styles.searchIcon} src={Icons.search} alt="" />
          <ul className={styles.navLinksCont}>
            <li>Icons</li>
            <li>Style Sets</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className={styles.forwardArrow}>
           <span></span>
           <img src={Icons.signIn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
