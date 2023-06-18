
import Link from "next/link";
import styles from './page.module.css'
import Menu from "@/components/menu/menu.js";
import Services from "@/components/services/services";
import Form from "@/components/footer/footer";
import About from "@/components/about/about";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner/banner";
export default function Home() {
  return (
    <>
    <Head>
      <title>Spac Tec</title>
      
    </Head>
    <Banner />
   <div className="Home">
    <Services />
    <About />
   </div>
   </>
    
  )
}
//Colocar imagens do services ok
//Ajustar o form
//Linkar a primeira pag com os produtos
//Fazer o menu aparecer também na proxima pag
//Criar o texto sobre nós
//Fazer o catálogo dos celulares
//Tentar fazer botões no menu que levem para uma sessão da pagina
//Colocar tipo um banner(Bota a imagem do astronauta) com um botão que leve à loja
