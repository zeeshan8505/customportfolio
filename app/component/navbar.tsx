import React from 'react'
import Link from 'next/link'
import styles from "@/app/page.module.css"

const navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.heading}>Portfolio</h1>
      <div>
      <ul className={styles.line}>
        <li >
        <Link href="/" className={styles.one}>Home</Link>
        </li>
        <li >
        <Link href="/about" className={styles.one}>About</Link>
        </li>
        <li >
        <Link href="/contact" className={styles.one}>Contact</Link>
        </li>
        </ul>
        </div>
    </div>
  )
}

export default navbar
