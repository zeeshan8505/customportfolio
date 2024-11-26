import React from 'react'
import Image from "next/image";
import styles from "@/app/page.module.css"

const herosection = () => {
  return (
    <div className={styles.hero}>
      <div>
      <h1 className={styles.name}>Hello, I'm Mmuhammad Zeeshan</h1>
      <p className={styles.para}>Dedicated Full-Stack Web Developer in progress specializing in HTML5, CSS3, TypeScript, JavaScript, Tailwind CSS, and Next.js, looking forward on building dynamic and user-centric web applications.</p>
      <button className={styles.button}>Hire Me</button>
      <button className={styles.button}>Download CV</button>
      </div>
      <div>
      <Image src="/profilepicture.jpg" alt='profile image' width={500} height={500}></Image>
      </div>
    </div>
  )
}

export default herosection
