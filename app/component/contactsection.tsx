import React from 'react'
import Image from 'next/image'
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import styles from "@/app/page.module.css"

const Contactsection = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.left}>
      <h4 className={styles.h4}>Let's connect</h4>
      <p className={styles.cp}>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you</p>
      <a href="https://github.com/zeeshan8505">
      <Image src={GithubIcon} alt='Github Icon'/>
      </a>
      <a href="https://www.linkedin.com/in/zeeshan-anis-0178862b4/">
      <Image src={LinkedinIcon} alt="Linkedin Icon" />
      </a>
      </div>
      <div className={styles.right}>
      <form className={styles.form}>
        <label htmlFor="Email">Your Email</label>
        <br />
        <input className={styles.input} type="Email" placeholder='xyz420@gmail.com'/>
        </form>
        <form className={styles.form}>
        <label htmlFor="Subject">Subject</label>
        <br />
        <input className={styles.input} type="text" placeholder='Just saying hi'/>
      </form>
      <form className={styles.form}>
        <label htmlFor="Messages">Messages</label>
        <br />
        <input className={styles.input} type="text" placeholder='Leave your message here'/>
      </form>
      <button className={styles.button}>Send Message</button>
      </div>
    </div>
  )
}

export default Contactsection

