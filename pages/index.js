import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Space from '../components/Space'
import WhySection from '../components/WhySection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AstroMutatio</title>
        <meta name="description" content="Why Space app for learning astronmy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <div className={styles.wave}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgb(236, 229, 229)" fill-opacity="1" d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,85.3C840,96,960,160,1080,160C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      </div>
      <Features/>
      <WhySection/>
      <Space/>
      <Footer/>
      <Menu/>
 
    </div>
  )
}
