import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import FooterMobile from '../components/FooterMobile'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import HeaderTopMobile from '../components/HeaderTopMobile'
import Main from '../components/Main'
import MainMobile from '../components/MainMobile'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>789BET</title>
        <meta name="description" content="789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được cấp thông qua Khu kinh tế Isle of Man & Cagayan Economic Zone and Free Port" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeaderTopMobile />
      <HeaderMobile />

      <Menu />
      <Main />
      <MainMobile />
      <Footer />
      <FooterMobile />
    </div>
  )
}
