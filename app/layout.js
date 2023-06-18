import './globals.css'
import { Inter } from 'next/font/google'
import Menu from '@/components/menu/menu'
import Footer from '@/components/footer/footer'
import Head from 'next/head'
import Image from 'next/image'
export default function Layout({ children }) {
  return (
  <>
    <Head>
      <title>Space Tec</title>
      <link rel="icon space" href='' />
    </Head>
  
    <Menu />
    <main>{children}</main>
    <Footer />
  </>
   ) 
}
