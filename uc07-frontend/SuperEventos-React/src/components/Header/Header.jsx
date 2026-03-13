import React from 'react'
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <h1 className={styles.titulo}>
                SUPER EVENTOS 2026
            </h1>
        </nav>
    </header>
  )
}

export default Header