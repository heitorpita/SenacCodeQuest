import React from "react";
import styles from "./Home.module.css";
import img1 from "../../assets/img/fotoPerfil.png";
import octopusmain from "../../assets/img/octopus-main.png";
import mimico from "../../assets/img//mimico.png";
import aculeatus from "../../assets/img/aculeatus.png";
import briareus from "../../assets/img/briareus.png";
import vulgaris from "../../assets/img/vulgaris.png";
import anao from "../../assets/img/anao.png";
import match1 from "../../assets/img/match1.png";
import match2 from "../../assets/img/match2.png";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Acessibilidade */}
      <button className={styles.accessibilityButton} aria-label="Acessibilidade">
        <span className={styles.menuIcon}>☰</span>
      </button>
      {/* Círculo azul topo direito */}
      <div className={styles.topRightCircle}></div>
      {/* Perfil */}
      <div className={styles.profileSection}>
        <img
          src={img1}
          alt="Foto de perfil"
          className={styles.profilePic}
        />
        <div className={styles.profileInfo}>
          <span className={styles.profileName}>
            USER55002 <span className={styles.downArrow}><i class="bi bi-arrow-down-short"></i></span>
          </span>
          <span className={styles.profileLocation}>Natal, RN - 550923</span>
        </div>
        <button className={styles.searchBtn}>LOGIN</button>
      </div>
      {/* Barra de busca */}
      <div className={styles.searchBarWrapper}>
        <span className={styles.searchIcon}><i class="bi bi-search"></i></span>
        <input
          className={styles.searchInput}
          placeholder="BUSCAR"
        />
        <span className={styles.filterIcon}><i class="bi bi-funnel"></i></span>
      </div>
      {/* Pets Section */}
      <div className={styles.petsSection}>
        <span className={styles.petsTitle}>Pets</span>
        <hr className={styles.petsDivider} />
        <div className={styles.petCardLarge}>
          <img
            src={octopusmain}
            alt="Polvo"
            className={styles.petImgLarge}
          />
        </div>
      </div>
      {/* Espécies */}
      <div className={styles.speciesSection}>
        <div className={styles.speciesHeader}>
          <span className={styles.speciesTitle}>Espécies</span>
          <a className={styles.seeAll} href="#">Ver todas</a>
        </div>
        <div className={styles.speciesList}>
          <div className={styles.speciesItem}>
            <img src={mimico} alt="Mimico" />
            <span>MIMICO</span>
          </div>
          <div className={styles.speciesItem}>
            <img src={aculeatus} alt="Aculeatus" />
            <span>ACULEATUS</span>
          </div>
          <div className={styles.speciesItem}>
            <img src={briareus} alt="Briareus" />
            <span>BRIAREUS</span>
          </div>
          <div className={styles.speciesItem}>
            <img src={vulgaris} alt="Vulgaris" />
            <span>VULGARIS</span>
          </div>
          <div className={styles.speciesItem}>
            <img src={anao} alt="Anão" />
            <span>ANÃO</span>
          </div>
        </div>
      </div>
      {/* Matches Perfeitos */}
      <div className={styles.matchesSection}>
        <span className={styles.matchesTitle}>MATCHES PERFEITOS PARA VOCÊ</span>
        <hr className={styles.matchesDivider} />
        <div className={styles.matchesList}>
          <div className={styles.matchCard}>
            <img src={match1} alt="Match 1" />
          </div>
          <div className={styles.matchCard}>
            <img src={match2} alt="Match 2" />
          </div>
        </div>
      </div>
      {/* Menu inferior */}
      <Footer />
      {/* Rodapé */}
    </div>
  );
}