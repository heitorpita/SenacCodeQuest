import React from 'react'
import styles from './styles.module.css'

function Card({ titulo, data, local, descricao, img}) {
  return (
    <div className={styles.container}>
    
        <h1>{titulo}</h1>
        <p>{data}</p>
        <p>{local}</p>
        <p>{descricao}</p>
        <img src={img}></img>
    
    </div>
  )
}

export default Card