import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <h1 className={styles.titulo}>
                LIVROS SOBRE PENTEST E HACKING
            </h1>
        </nav>
    </header>
  )
}

export default Header