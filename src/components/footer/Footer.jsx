import React from 'react'
import styles from "./Footer.module.css"
import { Images } from '../../assets'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.top}>
           <div className={styles.lft}>
            <img src={Images.brandLogoWhite} alt="" />
            <p>OpenStroke.io icons library is designed for millions of designers, developers, and content creators who care for attention to details. OpenStroke.io offering an quality 35,776 icons collection across 68 categories and having 4 unique styles including brand logos, and emojis. We are committed to expands our library.</p>
           </div>
           <div className={styles.rgt}>
               <ul>
                  <li>Pricing</li>
                  <li>FAQs</li>
                  <li>Icon Request</li>
                  <li>Report Icon</li>
                  <li>Contact Us</li>
               </ul>
               <ul>
                  <li>Dribbble</li>
                  <li>Linkedin</li>
                  <li>Twitter</li>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
               </ul>
           </div>
        </div>
        <div className={styles.btm}>
           <p>© Sketchish Designer, Llp.</p>
            <p>Made with ❤️ in India.</p>
            <p className={styles.payment}>Secure payment with <img src={Images.stripeLogo} alt="" /></p>
        </div>
    </div>
  )
}

export default Footer