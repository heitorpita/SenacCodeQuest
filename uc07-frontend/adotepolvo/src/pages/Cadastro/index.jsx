import React from "react";
import styles from "./Cadastro.module.css";
import img from "../../assets/img/logoadotepolvo.png";



export default function CadastroPage() {
  return (
    <div className={styles.container}>
      {/* Acessibilidade */}
      <button className={styles.accessibilityButton} aria-label="Acessibilidade">
        <span className={styles.menuIcon}><i class="bi bi-list"></i></span>
      </button>

      {/* Círculo azul topo direito */}
      <div className={styles.topRightCircle}></div>

      {/* Logo Polvo */}
      <div className={styles.logoContainer}>
        <img src={img} alt="Polvo" className={styles.logo} />
      </div>

      {/* Título */}
      <h1 className={styles.title}>
        adote <span className={styles.titlePolvo}>polvo</span>
      </h1>

      {/* Formulário (sem useState e sem funções JS) */}
      <form className={styles.form} action="#" method="post">
        <label htmlFor="nome" className={styles.label}>
          <span className={styles.labelIcon}><i class="bi bi-person-fill"></i></span>
          NOME COMPLETO :
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          className={styles.input}
          placeholder="Seu nome"
          required
        />

        <label htmlFor="email" className={styles.label}>
          <span className={styles.labelIcon}><i class="bi bi-envelope"></i></span>
          EMAIL :
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          placeholder="seuemail@exemplo.com"
          required
        />

        <label htmlFor="nascimento" className={styles.label}>
          <span className={styles.labelIcon}><i class="bi bi-calendar3"></i></span>
          DATA DE NASCIMENTO :
        </label>
        <input
          id="nascimento"
          name="nascimento"
          type="date"
          className={`${styles.input} ${styles.dateInput}`}
          required
        />

        <label htmlFor="senha" className={styles.label}>
          <span className={styles.labelIcon}><i class="bi bi-lock-fill"></i></span>
          SENHA :
        </label>
        <input
          id="senha"
          name="senha"
          type="password"
          className={styles.input}
          placeholder="Mínimo 6 caracteres"
          minLength={6}
          required
        />

        <label htmlFor="confirmarSenha" className={styles.label}>
          <span className={styles.labelIcon}><i class="bi bi-check2-square"></i></span>
          CONFIRMAR SENHA :
        </label>
        <input
          id="confirmarSenha"
          name="confirmarSenha"
          type="password"
          className={styles.input}
          placeholder="Repita a senha"
          minLength={6}
          required
          title="Repita a mesma senha"
        />

        <label className={styles.checkboxRow}>
          <input type="checkbox" name="termos" required />
          <span>Li e aceito os termos de uso</span>
        </label>

        <button type="submit" className={styles.submitButton}>
          CRIAR CONTA
        </button>
      </form>

      <div className={styles.footerText}>
        Já tem uma conta? <a href="/login">faça login</a>
      </div>
    </div>
  );
}