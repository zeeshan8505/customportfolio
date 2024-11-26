import React from 'react'
import Image from 'next/image'
import styles from "@/app/page.module.css"


const AboutSection = () => {
  return (
    
    <div className={styles.about}>
      <div>
        I<Image src="/profilepicture.jpg" alt='profile image' width={500} height={500}></Image>
        </div>
        <div>
        <h1 className={styles.h}>About Me</h1>
        <p className={styles.p}>Hi, I`&apos;`m Mohammad Zeeshan, a passionate web designer and aspiring full-stack web developer. My focus lies in crafting clean, intuitive, and user-friendly web applications that provide seamless user experiences. I enjoy the challenge of turning creative ideas into functional and visually appealing websites. With a strong foundation in both front-end and back-end development, I`&apos;`m committed to growing my expertise in full-stack development.
Currently, I`&apos;`m diving deep into the latest advancements in technology, including Web 3.0, metaverse, cloud computing, and artificial intelligence.As I continue to learn and grow, I aim to bring a balance of creativity and technical skill to every project, always pushing myself to innovate and improve.
Let`&apos;`s connect and explore the future of web development together!</p>
<ul className={styles.list}>
  <ul>Skills
    <ul className={styles.list2}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React.js</li>
                <li>Next.js</li>
                </ul>
  </ul>
  <ul >Education
    <ul className={styles.list2}>
  <h3><li>SSC in Commerce</li></h3>
            <p>Hameed Muhammad School</p>
            
            <h3><li>Intermediate</li></h3>
            <p>Government Commerce College</p>
           
            <h3><li>Bachlour of commerce </li></h3>
            <p>Karachi university</p>
            </ul>
  </ul>
  <ul>Courses
    <ul className={styles.list2}>
  <li>HTML CSS and Javascript from PIAIC</li>
  <li>Web 3.0, Metaverse and Artificial Intelligence from GIAIC</li>
  </ul>
  </ul>
</ul>
</div>
    </div>
    
  )
}

export default AboutSection
 