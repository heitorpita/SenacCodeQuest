import React from 'react'
import styles from './Livro.module.css'

function Livro({titulo, autor, ano, genero, capa}) { 

    return (
        <div className={styles.container}>
            <h1>{titulo}</h1>
            <p>{autor}</p>
            <p>{ano}</p>
            <p>{genero}</p>
            <img src={capa}></img>
        </div>
    )

}


export default Livro