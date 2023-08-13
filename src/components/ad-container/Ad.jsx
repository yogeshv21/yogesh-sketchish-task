import React from "react";
import styles from "./Ad.module.css";

// Local Imports
import { Icons } from "../../assets";

const Ad = () => {
  return (
    <div className={styles.adWraper}>
      <div className={styles.adCont}>
        <img className={styles.close} src={Icons.close} alt="" />
      </div>
    </div>
  );
};

export default Ad;
