import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./component/navbar";
import Herosection from "./component/herosection";
import About from "./about/page";
import Footer from "./component/footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Footer/>
  
    </div>
  );
}
