import React from "react";
import styles from "./Login.module.css";
import img from "../../assets/img/logoadotepolvo.png";


export default function LoginPage() {
  return (
    <div className={styles.container}>
      {/* Acessibilidade */}
      <button
        className={styles.accessibilityButton}
        aria-label="Acessibilidade"
      >
        <span className={styles.menuIcon}><i class="bi bi-list"></i></span>
      </button>
      {/* Círculo azul topo direito */}
      <div className={styles.topRightCircle}></div>
      {/* Logo Polvo */}
      <div className={styles.logoContainer}>
        <img
          src={img}
          alt="Polvo"
          className={styles.logo}
        />
      </div>
      {/* Título */}
      <h1 className={styles.title}>
        adote <span className={styles.titlePolvo}>polvo</span>
      </h1>
      {/* Formulário */}
      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          <span className={styles.labelIcon}><i class="bi bi-envelope"></i></span>
          EMAIL :
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
        />

        <label htmlFor="senha" className={styles.label}>
          <span className={styles.labelIcon}><i class="bi bi-lock"></i></span>
          SENHA :
        </label>
        <input
          id="senha"
          name="senha"
          type="password"
          className={styles.input}
        />

        <button
          type="submit"
          className={styles.loginButton}
        >
          LOGIN
        </button>
      </form>
      <div className={styles.signupText}>
        Não tem uma conta ? <a href="#">clique aqui</a>
      </div>
    </div>
  );
}