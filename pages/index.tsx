/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SEO from "../components/SEO/SEO";
import About from "../components/About/About";


/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SEO title={"The Junction: Built Using Polygon Layer 2 technology."} 
      description={"The Junction is a decentralized NFT marketplace built on the cutting-edge Polygon Layer 2 technology."} 
      image={"public/junction.png"} 
      url={"Viccci.xyz"}  />
      
        
       
          
          <div className={styles.heroBackground}>
            <video
        className='object-cover h-full w-full absolute -z-10'
        src="https://bafybeifmmgoeqny3kwqxswkdm7nhv3waa7hgp3e2ri5iomx3mbfgmxjbpm.ipfs.w3s.link/?filename=video+copy.mp4"
        autoPlay
        loop
        muted
      />
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <br/><br/><br/><br/><br/><br/>
          <Image src="/bg2.png" width={400} height={300} alt="Log"/>
          
            
              
              
              <p className={styles.heroSubtitle}>
                 A multichain NFT marketplace built by&nbsp;
                <Link
                  className={styles.link}
                  href="https://viccci.xyz/"
                  target="_blank"
                >
                  Viccci Protocol.
                </Link>{" "}
                Where art and technology come together to create a whole new world of digital ownership.
               As a cutting-edge NFT marketplace built on the Polygon Layer 2 network, we provide lightning-fast transactions 
               at a fraction of the cost. 
               </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://viccci.xyz"
                  target="_blank"
                >
                  Project
                </Link>
                
              </div>
            </div>
         
      
    
  );
};

export default Home;

