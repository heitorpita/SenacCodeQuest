import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <a className={styles.item} href="#">
          <span class="material-symbols-outlined">
            <i class="bi bi-house-door"></i>
          </span>
        </a>
        <a className={styles.item} href="#">
          <span class="material-symbols-outlined">
            <i class="bi bi-chat-left-dots-fill"></i>
          </span>
        </a>
        <a className={styles.item} href="#">
          <span class="material-symbols-outlined">
            <i class="bi bi-plus"></i>
          </span>
        </a>
        <a className={styles.item} href="#">
          <span class="material-symbols-outlined">
            <i class="bi bi-heart-fill"></i>
          </span>
        </a>
      </nav>
    </footer>
  );
}
