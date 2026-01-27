import React from 'react'
import styles from './LivroPage.module.css'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import List from "../components/List/List"

const livros = [
  {
    titulo: "Black Hat Python",
    autor: "Justin Seitz",
    ano: 2015,
    genero: "Pentest / Hacking",
    capa: "./src/assets/img/blackhatpython.jpg"
  },
  {
    titulo: "Técnicas de Invasão",
    autor: "Bruno Fraga",
    ano: 2017,
    genero: "Segurança da Informação / Pentest",
    capa: "./src/assets/img/tecdeinvasao.jpg"
  },
  {
    titulo: "Introdução ao Pentest",
    autor: "Daniel Moreno",
    ano: 2021,
    genero: "Pentest / Segurança da Informação",
    capa: "./src/assets/img/introdupentest.jpg" 
  },
  {
    titulo: "Introdução a Aplicações Web",
    autor: "Daniel Moreno",
    ano: 2021,
    genero: "Aplicações Web / Segurança",
    capa: "./src/assets/img/introduweb.jpg" 
  }
];

function LivroPage() {
  return (
    <div className={styles.container}>
      <Header />
      <List livros={livros}/>
      <Footer />
    </div>
  )
}

export default LivroPage