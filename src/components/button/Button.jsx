import React from 'react'
import styles from "./Button.module.css"

const Button = ({icon, title, isActive, margin}) => {
  return (
    <button className={`${styles.btn} ${isActive? styles.btnActive: ''} ${title?styles.extraPadding: ''}`}>
        {
            icon?<img src={icon} alt="" />:''
        }
        
        {
            title?<span>{title}</span>:''
        }
        
    </button>
  )
}

export default Button