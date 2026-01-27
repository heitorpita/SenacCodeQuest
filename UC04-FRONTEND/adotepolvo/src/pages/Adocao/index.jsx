import React from "react";
import styles from "./Adocao.module.css";

import fotoPerfil from "../../assets/img/fotoPerfil.png";
import mimico2 from "../../assets/img/mimico2.png";

import Footer from "../../components/Footer";


export default function AdocaoPage() {
  return (
    <div className={styles.container}>
      {/* Acessibilidade */}
      <button className={styles.accessibilityButton} aria-label="Acessibilidade">
        <span className={styles.menuIcon}><i class="bi bi-list"></i></span>
      </button>

      {/* Cabeçalho/hero */}
      <header className={styles.hero}>
        <button className={styles.backButton} aria-label="Voltar">
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className={styles.petHeroImage}>
          <img src={mimico2} alt="Foto do pet" />
        </div>

        {/* recorte curvo para transição */}
        <div className={styles.heroCut} aria-hidden="true"></div>
      </header>

      {/* Conteúdo */}
      <main className={styles.content}>
        {/* Dono / Local e ações */}
        <section className={styles.ownerRow}>
          <div className={styles.ownerInfo}>
            <img className={styles.ownerPic} src={fotoPerfil} alt="Foto do tutor" />
            <div className={styles.ownerText}>
              <span className={styles.ownerName}>JOSE SACODE</span>
              <span className={styles.ownerLocation}>FORTALEZA, CE</span>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Favoritar">
              <i className="bi bi-heart"></i>
            </button>
            <button className={styles.iconBtn} aria-label="Compartilhar">
              <i className="bi bi-share"></i>
            </button>
            <button className={styles.iconBtn} aria-label="Denunciar">
              <i className="bi bi-slash-circle"></i>
            </button>
          </div>
        </section>

        {/* Título do Pet */}
        <h1 className={styles.petTitle}>SHAOLIN, 2 ANOS</h1>

        {/* Ações principais */}
        <div className={styles.ctaRow}>
          <button className={`${styles.ctaBtn} ${styles.chatBtn}`}>
            <i className="bi bi-chat-left-text"></i>
            <span>CHAT</span>
          </button>
          <button className={`${styles.ctaBtn} ${styles.adoptBtn}`}>
            <span>ADOTE JÁ</span>
          </button>
        </div>

        {/* Informações do Pet */}
        <section className={styles.infoSection}>
          <div className={styles.infoHeader}>
            <h2>Informações do Pet</h2>
            <i className="bi bi-info-circle"></i>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Espécie</span>
              <span className={styles.infoValue}>Octopus mimicus (Polvo-mímico)</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Gênero</span>
              <span className={styles.infoValue}>Masculino</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Idade</span>
              <span className={styles.infoValue}>2 Anos</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Peso</span>
              <span className={styles.infoValue}>1 KG</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Tamanho</span>
              <span className={styles.infoValue}>Pequeno</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Cor</span>
              <span className={styles.infoValue}>Amarelo e Preto</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}