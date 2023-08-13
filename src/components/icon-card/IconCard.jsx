import React from 'react'
import styles from "./IconCard.module.css"

const IconCard = ({icon, name}) => {
  return (
    <div className={styles.iconCard}>
       <img src={icon} alt="" />
       <p>{name}</p>
    </div>
  )
}

export default IconCard