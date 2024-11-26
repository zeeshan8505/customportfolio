import React from 'react'
import styles from "@/app/page.module.css"

const Footer = () => {
  return (
    <footer>
        <div className={styles.footer}>
            <span className={styles.hf}>Coder..</span>
            <p className={styles.pf}>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;