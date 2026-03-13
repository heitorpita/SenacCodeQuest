import React from "react";
import styles from "./Perfil.module.css";

import coverImg from "../../assets/img/cover-aquarium.png";
import avatarImg from "../../assets/img/fotoPerfil.png";

export default function PerfilPage() {
  return (
    <div className={styles.container}>
      {/* Acessibilidade */}
      <button className={styles.accessibilityButton} aria-label="Acessibilidade">
        <span className={styles.menuIcon}>☰</span>
      </button>

      {/* Hero com imagem de capa */}
      <header className={styles.hero}>
        <img src={coverImg} alt="Imagem de capa do perfil" className={styles.heroImg} />
        <button className={styles.backButton} aria-label="Voltar">
          <i className="bi bi-chevron-left" aria-hidden="true"></i>
        </button>
      </header>

      {/* Bloco do usuário */}
      <section className={styles.userBlock}>
        <div className={styles.avatarWrap}>
          <img src={avatarImg} alt="Foto do usuário" className={styles.avatar} />
        </div>
        <h1 className={styles.userName}>Jack Sparrow</h1>
        <div className={styles.userLocation}>
          <i className="bi bi-geo-alt" aria-hidden="true"></i>
          <span>RIO DE JANEIRO, RJ</span>
        </div>
      </section>

      <main className={styles.content}>
        {/* Minha Conta */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Minha Conta</h2>

          <a className={styles.item} href="#">
            <div className={styles.itemLeft}>
              <i className="bi bi-person-lines-fill" aria-hidden="true"></i>
              <span>Editar Perfil</span>
            </div>
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </a>

          <a className={styles.item} href="#">
            <div className={styles.itemLeft}>
              <i className="bi bi-heart" aria-hidden="true"></i>
              <span>Favoritos</span>
            </div>
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </a>

          <a className={styles.item} href="#">
            <div className={styles.itemLeft}>
              <i className="bi bi-shield-lock" aria-hidden="true"></i>
              <span>Privacidade da Conta</span>
            </div>
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </a>

          <div className={styles.item}>
            <div className={styles.itemLeft}>
              <i className="bi bi-globe2" aria-hidden="true"></i>
              <span>Linguagem</span>
            </div>
            <span className={styles.itemValue}>PT-BR</span>
          </div>
        </section>

        {/* Notificações */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Notificações</h2>

          <label className={styles.item}>
            <div className={styles.itemLeft}>
              <i className="bi bi-chat-left-text" aria-hidden="true"></i>
              <span>Notificação do Chat</span>
            </div>
            <input type="checkbox" className={styles.switch} defaultChecked aria-label="Ativar/desativar notificação do chat" />
          </label>
        </section>

        {/* Mais */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mais</h2>

          <a className={styles.item} href="#">
            <div className={styles.itemLeft}>
              <i className="bi bi-question-circle" aria-hidden="true"></i>
              <span>Centro de Ajuda</span>
            </div>
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </a>
        </section>
      </main>

      {/* Barra inferior (estilo do mock) */}
      <nav className={styles.bottomNav} aria-label="Navegação inferior">
        <a href="#" className={styles.navIcon} aria-label="Início">
          <i className="bi bi-house-door"></i>
        </a>
        <a href="#" className={styles.navIcon} aria-label="Mensagens">
          <i className="bi bi-chat-left-text"></i>
        </a>
        <a href="#" className={styles.navIcon} aria-label="Adicionar">
          <i className="bi bi-plus-lg"></i>
        </a>
        <a href="#" className={styles.navIcon} aria-label="Favoritos">
          <i className="bi bi-heart"></i>
        </a>
      </nav>
    </div>
  );
}